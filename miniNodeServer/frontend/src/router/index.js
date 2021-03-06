import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/AddMemo.vue";
import Read from "../views/ReadMemo.vue";
import Edit from "../views/EditMemo.vue";
import Info from "../views/UserInfo.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

// const auth = (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem('accessToken') == null) {
//       alert('Signin please');
//       next('/signin');
//     }
//   }
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/info",
    name: "User Info",
    component: Info,
    meta: { requiresAuth: true },
  },
  {
    path: "/add",
    name: "Add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Add,
    meta: { requiresAuth: true },
  },
  {
    path: "/memos/:memoId",
    name: "Read",
    component: Read,
    meta: { requiresAuth: true },
  },
  {
    path: "/memos/edit/:memoId",
    name: "Edit",
    component: Edit,
    meta: { requiresAuth: true },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("accessToken") == null) {
      alert("Signin please");
      next("/signin");
    }
    next();
  } else {
    next();
  }
});

export default router;
