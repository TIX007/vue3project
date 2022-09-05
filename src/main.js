import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router"; // 3引入vuerouter
// import router from './router'   2引入vuerouter
import store from "./store";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("./pages/home"),
  },
  {
    path: "/fenlei",
    component: () => import("./pages/fenlei"),
  },
  {
    path: "/cart",
    component: () => import("./pages/cart"),
  },
  {
    path: "/detail/:id",
    component: () => import("./pages/detail"),
  },
  {
    path: "/mine",
    component: () => import("./pages/mine"),
  },
];
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).use(store).mount("#app");

// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes:[]
// })
