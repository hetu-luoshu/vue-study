import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

import { getRoutes } from "./server";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
      },
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/:any(.+)",
      name: "notFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

// router.addRoute({
//   path: "/about",
//   name: "about",
//   meta: {
//     title: "关于我们",
//   },
//   component: () => import("@/views/About.vue"),
// });
// let isAddRouter = false;
// router.beforeEach(async (to, from) => {
//   const routes = await getRoutes();
//   console.log(routes);
//   if (!isAddRouter) {
//     routes.forEach((route) => {
//       router.addRoute(route);
//     });
//     console.log(router.getRoutes());
//     isAddRouter = true;
//   }
//   return true;
// });

const routes = await getRoutes();
routes.forEach((route) => {
  router.addRoute(route);
});

export default router;
