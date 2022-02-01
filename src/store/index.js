import { createStore } from "vuex";

export default createStore({
  state: {
    // my profile
    imgSource:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/8.4ac55be3.png",
    profileStatus: "online",
  },
  getters: {
    getMyImgSource(state) {
      return state.imgSource;
    },
    getMyProfileStatus(state) {
      return state.profileStatus;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
