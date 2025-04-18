import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { ROUTE_NAMES } from './routerNames';

const routes: RouteRecordRaw[] = [
  { path: '/', name: ROUTE_NAMES.HOME, component: HomeView },
  { path: '/exe5.1', name: ROUTE_NAMES.FULL_NAME, component: () => import('@/views/FullNameView.vue') },
  { path: '/exe5.2', name: ROUTE_NAMES.CHAR_COUNT, component: () => import('@/views/CharCountView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
