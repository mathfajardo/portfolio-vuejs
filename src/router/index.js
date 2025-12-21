import Contato from '@/views/Contato.vue'
import Home from '@/views/Home.vue'
import Projetos from '@/views/Projetos.vue'
import Youtube from '@/views/Youtube.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: Projetos
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: Youtube
    }
  ],
})

export default router
