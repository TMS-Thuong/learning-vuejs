import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/exe3.1', name: 'Status', component: () => import('@/views/StatusView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
