import { createStore } from "vuex";

export default createStore({
  state: {
    // my profile
    name: "John Doe",
    disctiption: "Admin",
    subtitle:
      "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
    imgSource:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/8.4ac55be3.png",
    profileStatus: "online",

    sidemenuIsOpen: false,
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
    getSidemenuState(state) {
      return state.sidemenuIsOpen;
    },
  },
  mutations: {
    setSidemenuState(state, openState) {
      state.sidemenuIsOpen = openState;
    },
  },
  actions: {},
  modules: {},
});
