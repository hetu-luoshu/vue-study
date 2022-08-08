import Home from '../view/Home.vue';
import About from '../view/About.vue';
import { ref } from 'vue'

const path = ref(window.location.pathname)

const router = {
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    }
  ]
}

export default router;

export { path };