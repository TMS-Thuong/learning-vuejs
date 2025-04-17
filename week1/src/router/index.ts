import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/exe3.1', name: 'Status', component: () => import('@/views/StatusView.vue') },
  { path: '/exe3.2', name: 'Age', component: () => import('@/views/AgeView.vue') },
  { path: '/exe3.3', name: 'TextToggle', component: () => import('@/views/TextToggleView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
