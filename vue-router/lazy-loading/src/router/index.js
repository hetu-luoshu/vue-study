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
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/article",
      name: "article",
      component: Article,
    },
  ],
});

export default router;
