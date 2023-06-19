import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/핸드폰 장치',
    children: [{
      path: '핸드폰 장치',
      name: '핸드폰 장치',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '핸드폰 장치', icon: 'dashboard' }
    }]
  },


  {
    path: '/블랙리스트',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '블랙리스트',
        component: () => import('@/views/blacklist/index'),
        meta: { title: '블랙리스트', icon: 'heimingdan' }
      }
    ]
  },
  {
    path: '/전송 전환 설정',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '전송 전환 설정',
        component: () => import('@/views/SendSwitchSettings/index'),
        meta: { title: '전송 전환 설정', icon: 'youjiantou' }
      }
    ]
  },
  {
    path: '/강제 시작 설정',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '강제 시작 설정',
        component: () => import('@/views/ForceStartSettings/index'),
        meta: { title: '강제 시작 설정', icon: 'zuojiantou' }
      }
    ]
  },
  {
    path: '/통화 기록',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '통화 기록',
        component: () => import('@/views/CallLog/index'),
        meta: { title: '통화 기록', icon: 'jiantou_zuoyouqiehuan' }
      }
    ]
  },
  {
    path: '/연락처',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '연락처',
        component: () => import('@/views/contacts/index'),
        meta: { title: '연락처', icon: 'tongxunlu' }
      }
    ]
  },
  {
    path: '/IOS연락처',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IOS연락처',
        component: () => import('@/views/IOSContacts/index'),
        meta: { title: 'IOS연락처', icon: 'tongxunlu' }
      }
    ]
  },
  {
    path: '/메시지',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '메시지',
        component: () => import('@/views/leaveAMessage/index'),
        meta: { title: '메시지', icon: 'youxiang' }
      }
    ]
  },
  {
    path: '/위치 추적',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '위치 추적',
        component: () => import('@/views/PositionTracking/index'),
        meta: { title: '위치 추적', icon: 'weizhi' }
      }
    ]
  },
  {
    path: '/적용 목록',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '적용 목록',
        component: () => import('@/views/ApplicationList/index'),
        meta: { title: '적용 목록', icon: 'anzhuo' }
      }
    ]
  },
  {
    path: '/녹음',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '녹음',
        component: () => import('@/views/soundRecordin/index'),
        meta: { title: '녹음', icon: 'luyin' }
      }
    ]
  },
  {
    path: '/카메라',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '카메라',
        component: () => import('@/views/Camera/index'),
        meta: { title: '카메라', icon: 'shexiangtou_shiti' }
      }
    ]
  },
  {
    path: '/앨범',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '카메라',
        component: () => import('@/views/album/index'),
        meta: { title: '카메라', icon: 'xiangce' }
      }
    ]
  },
  {
    path: '/암호 설정',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '암호 설정',
        component: () => import('@/views/PasswordSettings/index'),
        meta: { title: '암호 설정', icon: 'shezhixitongshezhigongnengshezhishuxing' }
      }
    ]
  },








  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
