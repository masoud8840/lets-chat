import { createStore } from "vuex";

export default createStore({
  state: {
    // my profile
    name: "John Doe",
    disctiption: "Admin",
    subtitle: "",
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
    getMyName(state) {
      return state.name;
    },
    getMyDiscription(state) {
      return state.disctiption;
    },
    getMySubtitle(state) {
      return state.subtitle;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
