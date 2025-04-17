import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/register', name: 'Register', component: () => import('@/views/RegisterView.vue') },
  { path: '/counter', name: 'Counter', component: () => import('@/views/CounterView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
