import { createStore } from "vuex";

export default createStore({
  state: {
    // User Itself
    name: "John Doe",
    disctiption: "Admin",
    subtitle:
      "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
    imgSource:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/8.4ac55be3.png",
    profileStatus: "online",
    sidemenuIsOpen: false,

    ChatsList: [
      {
        id: "feleciarower",
        name: "Felecia Rower",
        caption:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing.",
        imgSource:
          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/1.9cba4a79.png",

        userStatus: "online",
      },
      {
        id: "adalbertogranzin",
        name: "Adalberto Granzin",
        caption:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        imgSource:
          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/2.748e7504.png",
        userStatus: "away",
      },
    ],
    ContactsList: [
      {
        id: "feleciarower",
        name: "Felecia Rower",
        caption:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing.",
        imgSource:
          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/1.9cba4a79.png",

        userStatus: "online",
      },
      {
        id: "adalbertogranzin",
        name: "Adalberto Granzin",
        caption:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        imgSource:
          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/2.748e7504.png",
        userStatus: "away",
      },
      {
        id: "joaquinaweisenborn",
        name: "Joaquina Weisenborn",
        caption:
          "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
        imgSource:
          "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-4/img/3.5df49333.png",
        userStatus: "offline",
      },
    ],

    findedUser: {},
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

    getContactsList(state) {
      return state.ContactsList;
    },
    getChatsList(state) {
      return state.ChatsList;
    },

    getFindedUser(state) {
      return state.findedUser;
    },
  },
  mutations: {
    setSidemenuState(state, openState) {
      state.sidemenuIsOpen = openState;
    },
    setFindedUser(state, id) {
      const usersList = state.ContactsList;
      for (const index in usersList) {
        if (usersList[index].id == id) {
          state.findedUser = usersList[index];
        }
      }
    },
  },
  actions: {
    setSidemenuState(context, openState) {
      context.commit("setSidemenuState", openState);
    },
    setFindedUser(context, userID) {
      context.commit("setFindedUser", userID);
    },
  },
  modules: {},
});
