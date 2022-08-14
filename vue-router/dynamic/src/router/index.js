import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Article from "@/views/Article.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: import("@/views/About.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: import("@/views/Article.vue"),
    },
  ],
});

export default router;
