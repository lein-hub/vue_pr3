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
    },
    signout(state) {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
      location.reload();
    },
    getAccessToken(state) {
      state.accessToken = localStorage.getItem("accessToken");
    },
  },
  actions: {
    signin({ commit }, payload) {
      const data = { userid: payload.userid, password: payload.password };
      return axios
        .post("/api/auth/login", data)
        .then((res) => {
          if (res.status == 200) {
            // 로그인 성공
            commit("signin", { accessToken: res.data.token });
          }
        })
        .catch(() => {
          // 에러 발생하면 로그아웃 처리
          commit("signout");
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
