//confinguration routering path.
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Aim',
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '主页',
      hidden: false,
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'CircleCloseFilled',
    },
  },
  //another path Match
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: '任意',
      hidden: true,
      icon: 'RemoveFilled',
    },
  },
]
