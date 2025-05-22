import { createRouter, createWebHistory } from 'vue-router';
import DegreeManagement from '@/pages/DegreeManagement.vue';

const routes = [
  {
    path: '/degrees',
    name: 'DegreeManagement',
    component: DegreeManagement,
  },
  {
    path: '/',
    redirect: '/degrees',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
