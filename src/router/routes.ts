import { RouteRecordRaw } from 'vue-router';
// import PageHome from 'src/pages/PageHome.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Home', component: () => import('src/pages/Home.vue') },
      {
        path: '/Delivery',
        component: () => import('src/pages/Delivery.vue'),
      },
      {
        path: '/About',
        component: () => import('src/pages/About.vue'),
      },
      { path: '/News', component: () => import('src/pages/News.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
