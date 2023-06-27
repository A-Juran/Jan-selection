//confinguration routering path.
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '主页',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
          hidden: false,
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
    },
  },
]
