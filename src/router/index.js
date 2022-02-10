import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
// import Home from "@/views/Home.vue";

Vue.use(VueRouter)

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

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    icon: 'el-icon-s-home',
    name: '系统首页',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },
  {
    path: '/yezhuguanli',
    name: '业主管理',
    icon: 'el-icon-s-custom',
    redirect: '/yezhuguanli',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/yezhuguanli',
        component: () => import('../views/owner/index.vue')
      }
    ]
  },

  {
    path: '/xinwenzixun',
    component: Layout,
    name: '新闻资讯',
    redirect: '/xinwenzixun/menu1-1',
    icon: 'el-icon-s-management',
    // hidden: true,
    children: [
      {
        path: '/xinwenzixun/menu1-1',
        component: () => import('../views/news/menu1-1/index.vue'),
        name: '新闻资讯-1'
        // icon: "el-icon-s-management",
      },
      {
        path: '/xinwenzixun/menu1-2',
        component: () => import('../views/news/menu1-2/index.vue'),
        name: '新闻资讯-2'
        // icon: "el-icon-s-management",
      }
    ]
  },
  {
    path: '/shoucangguanli',
    name: '收藏管理',
    icon: 'el-icon-star-on',
    component: Layout,
    children: [
      {
        path: '/shoucangguanli',
        component: () => import('../views/like/index.vue')
      }
    ]
  },
  {
    path: '/liebiaoguanli',
    name: '组件通信',
    icon: 'el-icon-s-operation',
    component: Layout,
    children: [
      {
        path: '/liebiaoguanli',
        component: () => import('../views/list/index.vue')
      }
    ]
  },
  {
    path: '/gedanguanli',
    name: 'JS测试',
    icon: 'el-icon-message-solid',
    component: Layout,
    children: [
      {
        path: '/gedanguanli',
        component: () => import('../views/music/index.vue')
      }
    ]
  },
  {
    path: '/css',
    name: 'CSS经典',
    icon: 'el-icon-message-solid',
    component: Layout,
    children: [
      {
        path: '/css',
        component: () => import('../views/css/index.vue')
      }
    ]
  },
  {
    path: '/loading',
    name: 'Loading动画',
    icon: 'el-icon-message-solid',
    component: Layout,
    children: [
      {
        path: '/loading',
        component: () => import('../views/css/loading/index.vue')
      }
    ]
  },
  {
    path: '/tong',
    name: '通用样式',
    icon: 'el-icon-message-solid',
    component: Layout,
    children: [
      {
        path: '/tong',
        component: () => import('../views/tong/index.vue')
      }
    ]
  },
  {
    path: '/Vuejianli',
    name: 'vue制作会动的简历',
    icon: 'el-icon-message-solid',
    component: Layout,
    children: [
      {
        path: '/Vuejianli',
        component: () => import('../views/Vuejianli/index.vue')
      }
    ]
  }

  // {
  //   path: "/",
  //   name: "",
  //   icon: "",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/",
  //       component: () => import(""),
  //     },
  //   ],
  // },

  // 404 page must be placed at the end !!!
  // { path: "*", redirect: "/404", hidden: true },
]

const createRouter = () =>
  new VueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
