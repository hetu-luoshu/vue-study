import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import Article from '@/view/article/List.vue'
import User from '@/view/user/List.vue'
import Show from '@/view/article/Show.vue'
import UserShow from '@/view/user/Show.vue'
import NotFound from '@/view/common/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { class: 'home' },
      component: Home,
    },
    {
      path: '/article',
      name: 'article',
      meta: { class: 'article' },
      component: Article
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/show/:id(\\d+)',
      name: 'article-show',
      component: Show
    },
    {
      path: '/userShow/:id',
      name: 'user-show',
      component: UserShow
    },
    {
      path: '/:all(.*)', 
      component: NotFound
    }
  ]
})

export default router 