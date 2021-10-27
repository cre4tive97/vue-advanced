import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";
import bus from "../utils/bus";
import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:spinner");
            next();
          })
          .catch((error) => console.log(error));
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
    },

    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
