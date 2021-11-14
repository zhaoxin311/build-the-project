import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("../views/404.vue"),
    hidden: true,
  },
  {
    path: "/",
    name: "Home",
    component: Layout,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
