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
import edit_info from '@/Portal/User/edit_info.vue';
import creat_user from '@/Portal/User/create_user.vue';
import creat_user_group from '@/Portal/User/user_group/user_group.vue';
import image_Grid from '@/host/image_GRID';
import Message_dialog from '@/components/Message_dialog.vue';
import cpu_panel from '@/components/cpu_panel.vue';
import diskInfo_panel from '@/components/diskInfo_panel.vue';
import hostinfo_panel from '@/components/hostinfo_panel.vue';
import coresPercent_panel  from '@/components/sub_components/coresPercent_panel.vue' ;
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
  },
  {
    path:'/test/card',
    component:Test_page,
    name :'Test_page',
    meta:{title:'Test_page'}
  }
  ,{
    path:'/User/edit_info',
    component:edit_info,
    name :'edit_info',
    meta:{title:'edit_info'}
  },
  {
    path:'/User/creat_user',
    component:creat_user,
    name :'creat_user',
    meta:{title:'creat_user'}
  },
  {
    path:'/User/user_group',
    component:creat_user_group,
    name :'user_group',
    meta:{title:'user_group'}
  },
  {
    path:'/image/imageGRID',
    component:image_Grid,
    name:'Image_Grid',
    meta :{title:'user_group'}
  },
  {
    path:'/local_api/Message_dialog',
    component:Message_dialog,
    name:'Message_dialog',
    meta :{title:'Message_dialog'}
  },
  {
    path:'/local_api/cpu_panel',
    component:cpu_panel,
    name:'Cpu_panel',
    meta :{title:'Cou_panel'}
  },
  {
    path:'/local_api/diskInfo_panel',
    component:diskInfo_panel,
    name:'diskInfo_panel',
    meta :{title:'diskInfo_panel'}  
  },
  {
    path:'/local_api/hostinfo_panel',
    component:hostinfo_panel,
    name:'hostinfo_panel',
    meta :{title:'hostinfo_panel'}  
  },
  {
    path:'/local_api/coresPercent_panel',
    component:coresPercent_panel,
    name:'coresPercent_panel',
    meta :{title:'coresPercent_panel'}
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


