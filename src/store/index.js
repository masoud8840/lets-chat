import { createStore } from "vuex";

export default createStore({
  state: {
    // User Itself
    name: "John Doe",
    disctiption: "Admin",
    subtitle:
      "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
    imgSource: require("/src/assets/users/Mine.png"),
    profileStatus: "online",
    sidemenuIsOpen: false,

    ChatsList: [
      {
        id: "feleciarower",
        name: "Felecia Rower",
        caption:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing.",
        imgSource: require("/src/assets/users/Felecia_Rower.png"),
        userStatus: "online",
        messages: [
          {
            text: "hello",
          },
        ],
      },
      {
        id: "adalbertogranzin",
        name: "Adalberto Granzin",
        caption:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        imgSource: require("/src/assets/users/Adalberto_Granzin.png"),
        userStatus: "away",
        messages: [
          {
            text: "hello",
          },
        ],
      },
    ],
    ContactsList: [
      {
        id: "joaquinaweisenborn",
        name: "Joaquina Weisenborn",
        caption:
          "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
        imgSource: require("/src/assets/users/Joaquina_Weisenborn.png"),
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
      const chatsList = state.ChatsList;
      const contactsList = state.ContactsList;

      for (let index in chatsList) {
        if (chatsList[index].id == id) {
          state.findedUser = chatsList[index];
        }
      }
      for (let index in contactsList) {
        if (contactsList[index].id == id) {
          state.findedUser = contactsList[index];
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
