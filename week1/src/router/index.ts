import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/exe-six-one', name: 'User', component: () => import('@/views/UserView.vue') },
  { path: '/exe-six-two', name: 'Counter', component: () => import('@/views/CounterView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
