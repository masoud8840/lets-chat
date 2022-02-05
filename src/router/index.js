import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChatPage from "../views/ChatPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:userID",
    name: "ChatPage",
    component: ChatPage,
    
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
