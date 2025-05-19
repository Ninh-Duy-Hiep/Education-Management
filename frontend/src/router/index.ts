import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import Dashboard from '@/components/Dashboard.vue';

// Định nghĩa các route với kiểu dữ liệu của Vue Router
const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Kiểm tra nếu người dùng đã đăng nhập trước khi vào các trang yêu cầu xác thực
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token');
  if (to.meta.requiresAuth && !token) {
    next('/login');  // Chuyển hướng tới trang login nếu chưa đăng nhập
  } else {
    next();
  }
});

export default router;
