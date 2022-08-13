import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Article from "@/views/Article.vue";

const options = (to, from, savedPosition) => {
  const options = { behavior: "smooth" };
  if (to.meta.el) {
    options.el = to.meta.el;
  }
  if (to.meta.top) {
    options.top = 0;
  }
  return options;
};

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition ?? options(to, _, savedPosition));
      }, to.meta.delay ?? 0);
    });
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        enterClass: "animate__animated animate__bounceIn",
        leaveClass: "animate__animated animate__hinge",
        delay: 2000,
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        enterClass: "animate__animated animate__bounceIn",
        leaveClass: "animate__animated animate__hinge",
        delay: 2000,
        el: "#hetu",
      },
    },
    {
      path: "/article",
      name: "article",
      component: Article,
      meta: {
        top: true,
      },
    },
  ],
});

export default router;
