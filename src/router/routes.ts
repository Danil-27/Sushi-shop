import { RouteRecordRaw } from 'vue-router';
// import PageHome from 'src/pages/PageHome.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('src//layouts/MainLayout.vue'),
    children: [
      {
        path: '/Home',
        component: () => import('src//pages/Home.vue'),
      },
      {
        path: '/Delivery',
        component: () => import('src//pages/Delivery.vue'),
      },
      {
        path: '/About',
        component: () => import('src//pages/About.vue'),
      },
      {
        path: '/News',
        component: () => import('src//pages/News.vue'),
      },
      {
        path: '/Notices',
        component: () => import('src//pages/Notices.vue'),
      },
      {
        path: '/Liked',
        component: () => import('src/pages/Liked.vue'),
      },
      {
        path: '/MyPage',
        component: () => import('src//pages/MyPage.vue'),
      },
      {
        path: '/Basket',
        component: () => import('src//pages/Basket.vue'),
      },
      {
        path: '/Menu',
        component: () => import('src//pages/Menu.vue'),
      },
      {
        path: '/Vacancies',
        component: () => import('src//pages/Vacancies.vue'),
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

export default routes;
