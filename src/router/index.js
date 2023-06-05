import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SecondaryPage from '../pages/SecondaryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/secpage',
      name: 'secondaryPage',
      component: SecondaryPage
    },
    // caso nenhum path seja compatível, redireciona pra home
    {
      path: '/:pathMatch(.*)*',
      component: HomePage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior() {
    return window.scrollTo({ bottom: 0, behavior: 'smooth' })
  }
})

export default router
