import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/Portal/Login.vue';
import About from '@/components/About.vue';

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: Login,
    name: 'Login',
    meta: { title: 'Login' }
  },
  {
    path: '/about',
    component: About,
    name: 'about',
    meta: { title: 'About' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Your Default Title';
  next();
});

export default router;
