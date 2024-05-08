// @ts-nocheck
import AdminComponent1 from '@/components/test/AdminComponent1.vue';
import AdminComponent2 from '@/components/test/AdminComponent2.vue';
import AdminComponent3 from '@/components/test/AdminComponent3.vue';
import AdminComponent4 from '@/components/test/AdminComponent4.vue';
import UserComponent1 from '@/components/test/UserComponent1.vue';
import UserComponent2 from '@/components/test/UserComponent2.vue';
import GuestComponent1 from '@/components/test/GuestComponent1.vue';
import GuestComponent2 from '@/components/test/GuestComponent2.vue';

/**
 * Map of roles to corresponding components.
 * @type {Object.<string, Array.<{ name: string, component: any, priority: number }>>}
 */

//说明:
//  被加载的组件库
//   name: 组件名
//   component: 组件
//   priority: 优先级，数字越小，优先级越高
// // 优先级相同的组件，后加载的会覆盖先加载的组件



const roleComponentMap = {
  admin: [
    { name: 'AdminComponent1', component: AdminComponent3, priority: 3 },
    { name: 'AdminComponent1', component: AdminComponent1, priority: 1 },
    { name: 'AdminComponent2', component: AdminComponent2, priority: 2 },
    { name: 'AdminComponent-1', component: AdminComponent4, priority: -1 },
  ],
  user: [
    { name: 'UserComponent1', component: UserComponent1, priority: 1 },
    { name: 'UserComponent2', component: UserComponent2, priority: 2 },
  ],
  guest: [
    { name: 'GuestComponent1', component: GuestComponent1, priority: 1 },
    { name: 'GuestComponent2', component: GuestComponent2, priority: 2 },
  ],
};
// module.exports = roleComponentMap;
export default roleComponentMap;