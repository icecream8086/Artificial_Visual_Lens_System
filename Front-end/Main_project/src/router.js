import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/Portal/Login.vue';
import SignUP from '@/Portal/SignUP.vue';
import About from '@/components/About.vue';
import dashboard from '@/Portal/dashboard.vue';
import whoami from '@/Portal/whoami.vue';
import rand_eachart from '@/components/rand_eachart.vue';
import NotFound from '@/host/NotFound.vue';
import Empty from '@/host/Empty.vue';
import User_rectify from '@/Portal/User/User_rectify.vue';
import ErrorPage from '@/host/Error.vue';
import UnauthorizedPage from '@/host/Unauthorized.vue';
//--------------Test----------------
import Test_page from '@/test/card.vue';


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
    path: '/empty',
    component: Empty,
    name: 'Empty',
    meta: { title: 'Empty' }
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound',
    meta: { title: 'Page Not Found' }
  },
  {
    path: '/User/User_rectify',
    component: User_rectify,
    name: 'User_rectify',
    meta: { title: 'User_rectify' }
  },
  {
    path:'/host/Error',
    component:ErrorPage,
    name:'ErrorPage',
    meta:{title:'ErrorPage'}
  },
  {
    path:'/host/Unauthorized',
    component:UnauthorizedPage,
    name:'UnauthorizedPage',
    meta:{title:'UnauthorizedPage'}
    path:'/test/card',
    component:Test_page,
    name :'Test_page',
    meta:{title:'Test_page'}
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
