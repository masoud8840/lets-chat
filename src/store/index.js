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
        userStatus: "offline",

        messages: [
          {
            text: "hello",
            from: "feleciarower",
            imNext: true,
          },
        ],
      },
      {
        id: "adalbertogranzin",
        name: "Adalberto Granzin",
        caption:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        imgSource: require("/src/assets/users/Adalberto_Granzin.png"),
        userStatus: "do-not-disturb",
        tag: "contacts",
        messages: [
          {
            text: "hello",
            from: "adalbertogranzin",
            imNext: true,
          },
          {
            text: "how are you doing?",
            from: "adalbertogranzin",
            imNext: false,
          },
          {
            text: "hello",
            from: "you",
            imNext: true,
          },
          {
            text: "find thanks and u? ",
            from: "you",
          },
        ],
      },
      {
        id: "joaquinaweisenborn",
        name: "Joaquina Weisenborn",
        caption:
          "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
        imgSource: require("/src/assets/users/Joaquina_Weisenborn.png"),
        userStatus: "do-not-disturb",
      },
      {
        id: "verlamorgano",
        name: "Verla Morgano",
        caption:
          "Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.",
        imgSource: require("/src/assets/users/Verla_Morgano.png"),
        userStatus: "online",
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
          return;
        }
      }
      for (let index in contactsList) {
        if (contactsList[index].id == id) {
          state.findedUser = contactsList[index];
          return;
        }
      }
    },

    sendMessage(state, message) {
      if (!state.findedUser.messages) {
        state.findedUser.messages = [message];
      } else {
        state.findedUser.messages.push({
          text: message.text,
          from: "you",
          imNext: message.imNext,
        });
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
    sendMessage(context, payload) {
      const message = {
        text: payload.messageText,
        from: "you",
        imNext: payload.imNext,
      };

      context.commit("sendMessage", message);
    },
  },
  modules: {},
});
