import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/Portal/Login.vue';
import SignUP from '@/Portal/SignUP.vue';
import About from '@/components/About.vue';
import dashboard from '@/Portal/dashboard.vue';
import whoami from '@/Portal/whoami.vue';
import rand_eachart from '@/components/rand_eachart.vue';
import NotFound from '@/host/NotFound.vue';
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
  },
  {
    path: '/SignUP',
    component: SignUP,
    name: 'SignUP',
    meta: { title: 'SignUP' }
  },
  {
    path: '/dashboard',
    component: dashboard,
    name: 'dashboard',
    meta: { title: 'dashboard' }
  }
  ,{
    path: '/whoami',
    component: whoami,
    name: 'whoami',
    meta: { title: 'whoami' }
  },
  {
    path: '/test/rand_eachart',
    component: rand_eachart,
    name: 'rand_eachart',
    meta: { title: 'rand_eachart' }
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound',
    meta: { title: 'Page Not Found' }
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
