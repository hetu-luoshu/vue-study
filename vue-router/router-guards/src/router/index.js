import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

import { loginCheck } from "../hepler";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        auth: false,
      },
      beforeEnter: [loginCheck],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

// 全局前置守卫
router.beforeEach((to, from) => {
  console.log("beforeEach", to, from);
  return true;
});

// 全局解析守卫
router.beforeResolve((to, from) => {
  console.log("beforeResolve", to, from);
  return true;
});

// 全局后置守卫
router.afterEach((to, from, fail) => {
  console.log("afterEach", to, from, fail);
});

export default router;
