import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/exe4.1', name: 'Fruit', component: () => import('@/views/FruitListView.vue') },
  { path: '/exe4.2', name: 'Product', component: () => import('@/views/ProductView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
