import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/bai2.1', name: 'Class', component: () => import('@/views/ClassTextView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
