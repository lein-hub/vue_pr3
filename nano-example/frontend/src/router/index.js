import Vue from 'vue';
import VueRouter from 'vue-router';

import BookIndex from '@/components/BookIndex.vue';  // @ = src폴더
import BookDetail from '@/components/BookDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path:'/', component:BookIndex },
        { path:'/book/:book_id', component:BookDetail },
        // { path:'/menus/:menu_id', component:MenuItem },
        // { path:'/events', component:Events, props: (route) => ({query_id: route.query.event_id}) },
        // { path:'/events/:event_id', component:Events, props: true },
        // { path:'/reviews', component:Reviews },
    ]
});