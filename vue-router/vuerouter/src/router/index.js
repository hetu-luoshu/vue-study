import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/front/Home.vue";
import Article from "@/view/front/article/List.vue";
import User from "@/view/front/user/List.vue";
import Show from "@/view/front/article/Show.vue";
import UserShow from "@/view/front/user/Show.vue";
import NotFound from "@/view/common/NotFound.vue";
import NavigationUser from "@/components/NavigationUser.vue";
import Front from "@/layout/Front.vue";


import Member from "@/layout/Member.vue";
import Mobile from "@/view/member/Mobile.vue";
import Email from "@/view/member/Email.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'link-active',
  routes: [
    {
      path: "/",
      name: "front",
      component: Front,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "article",
          name: "article",
          component: Article,
        },
        {
          path: "user",
          name: "user",
          components: {
            navigation: NavigationUser,
            default: User,
          },
        },
        {
          path: "/articleShow/:id(\\d+)",
          name: "article-show",
          component: Show,
          alias: "/:id(\\d+)"
        },
        {
          path: "userShow/:id",
          name: "user-show",
          component: UserShow,
        },
      ],
    },
    {
      path: '/member',
      component: Member,
      children: [
        {
          path: 'mobile',
          name: 'member',
          component: Mobile
        },
        {
          path: 'email',
          name: 'email',
          component: Email
        }
      ]
    },
    {
      path: "/:all(.*)",
      component: NotFound,
    },
  ],
});

export default router;
