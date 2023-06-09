import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
// componente fica lazy, só é carregado quando se clica para vê-lo
const SecondaryPage = () => import(/* webpackChunkName: 'secpage' */ '@/pages/SecondaryPage.vue')
const RickInfos = () => import(/* webpackChunkName: 'secpage' */ '@/pages/RickInfos.vue')

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
      component: SecondaryPage,
      children: [
        {
          path: ':rickInfos',
          name: 'rickInfos',
          component: RickInfos,
          props: true
        }
      ]
    },
    // caso nenhum path seja compatível, redireciona pra home
    {
      path: '/:pathMatch(.*)*',
      component: HomePage
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ bottom: 0, behavior: 'smooth' })
  }
})

export default router
