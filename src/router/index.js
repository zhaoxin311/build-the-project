import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";
// import Home from "@/views/Home.vue";

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

  {
    path: "/menu1",
    component: Layout,
    name: "menu1",
    meta: {
      title: "menu1",
      icon: "menu1",
    },
    children: [
      {
        path: "menu1-1",
        component: () => import("../views/menu1/menu1-1/index.vue"),
        name: "menu1-1",
        meta: { title: "menu1-1" },
      },
      {
        path: "menu1-2",
        component: () => import("../views/menu1/menu1-2/index.vue"),
        name: "menu1-2",
        meta: { title: "menu1-2" },
      },
    ],
  },
  {
    path: "/menu2",
    component: Layout,
    name: "menu2",
    meta: {
      title: "menu2",
      icon: "menu2",
    },
    children: [
      {
        path: "menu2-1",
        component: () => import("../views/menu2/menu2-1/index.vue"),
        name: "menu2-1",
        meta: { title: "menu2-1" },
      },
      {
        path: "menu2-2",
        component: () => import("../views/menu2/menu2-2/index.vue"),
        name: "menu2-2",
        meta: { title: "menu2-2" },
      },
    ],
  },
  {
    path: "/menu3",
    component: Layout,
    children: [
      {
        path: "menu3-1",
        component: () => import("../views/menu3/menu3-1/index.vue"),
        name: "menu3-1",
        meta: { title: "menu3-1", icon: "icon" },
      },
    ],
  },
  // {
  //   path: "/permission",
  //   component: Layout,
  //   //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  //   // redirect: 'noRedirect'
  //   redirect: "/permission/index", //重定向地址，在面包屑中点击会重定向去的地址
  //   hidden: true, // 不在侧边栏显示 (默认 false 显示在侧边栏)
  //   alwaysShow: true, //一直显示根路由
  //   meta: { roles: ["admin", "editor"] }, //你可以在根路由设置权限，这样它下面所有的子路由都继承了这个权限
  //   children: [
  //     // {
  //     //   path: "index",
  //     //   component: () => import("permission/index"),
  //     //   name: "permission", // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  //     //   meta: {
  //     //     title: "permission", // 设置该路由在侧边栏和面包屑中展示的名字
  //     //     icon: "lock", //路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
  //     //     roles: ["admin", "editor"], // 设置该路由进入的权限，支持多个权限叠加//或者你可以给每一个子路由设置自己的权限
  //     //     noCache: true, // 为true，不会被 <keep-alive> 缓存
  //     //   },
  //     // },
  //   ],
  // },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
