import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
  },
  getters: {
    isAuth(state) {
      if (state.accessToken == null) return false;
      return true;
    },
  },
  mutations: {
    signin(state, payload) {
      state.accessToken = payload.accessToken;
      localStorage.setItem("accessToken", state.accessToken);
      localStorage.setItem("userId", payload.userId)
    },
    signout(state) {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      location.reload();
    },
    getAccessToken(state) {
      state.accessToken = localStorage.getItem("accessToken");
    },
    loginFailed(state) {
        state.accessToken = null;
        localStorage.removeItem('accessToken');
    }
  },
  actions: {
    signin({ commit }, payload) {
      const data = { userid: payload.userid, password: payload.password };
      return axios
        .post("/api/auth/login", data)
        .then((res) => {
          if (res.status == 200) {
            // 로그인 성공
            commit("signin", { accessToken: res.data.token, userId: data.userid });
            location.replace('/');
          }
        })
        .catch((error) => {
          // 에러 발생하면 로그아웃 처리
          commit("loginFailed");
          return Promise.reject(error);
        });
    },
    signup({ commit }, payload) {
      const data = {
        userid: payload.userid,
        name: payload.name,
        password: payload.password,
      };
      return axios
        .post("/api/users", data)
        .then((res) => {
          if (res.status == 200) {
            location.href("/signin");
          }
        })
        .catch(() => {
          // 에러 발생하면 로그아웃 처리
          commit("signout");
        });
    },
  },
});
