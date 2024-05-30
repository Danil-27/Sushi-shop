import { RouteRecordRaw } from 'vue-router';

// import PageHome from 'src/pages/PageHome.vue';
export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('src/components/layouts/MainLayout.vue'),
    children: [
      {
        path: '/Home',
        component: () => import('src/components/pages/Home.vue'),
      },
      {
        path: '/Delivery',
        component: () => import('src/components/pages/Delivery.vue'),
      },
      {
        path: '/About',
        component: () => import('src/components/pages/About.vue'),
      },
      {
        path: '/News',
        component: () => import('src/components/pages/News.vue'),
      },
      {
        path: '/Notices',
        component: () => import('src/components/pages/Notices.vue'),
      },
      {
        path: '/Liked',
        component: () => import('src/components/pages/Liked.vue'),
      },
      {
        path: '/MyPage',
        component: () => import('src/components/pages/MyPage.vue'),
      },
      {
        path: '/Basket',
        component: () => import('src/components/pages/Basket.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
];
