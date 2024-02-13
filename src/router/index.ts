import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/yes',
      name: 'yes',
      component: () => import('../views/YesView.vue')
    },
    {
      path: '/reps',
      name: 'reps',
      component: () => import('../views/RepsView.vue')
    },
    {
      path: '/sets',
      name: 'sets',
      component: () => import('../views/SetsView.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneView.vue')
    }
  ]
})

export default router
