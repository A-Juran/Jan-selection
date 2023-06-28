// 路由鉴权，项目当中路由能不能被的权限的设置（某一个路由什么条件下可以访问、什么条件下不能访问。）
import router from '@/router'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import setting from './setting'
//获取用户仓库
import useUserStore from '@/store/modules/user'
/**
 * 对象定义
 */
let userStore = useUserStore(pinia)
//配置
NProgress.configure({ showSpinner: false })
/**
 * 全局守卫：项目当中任意路由切换都会触发的钩子。
 */
//全局前置守卫。
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    //进度条
    NProgress.start()
    /**
     * to：你将要访问哪个路由
     * from：从哪个路由而来
     * netxt：路由的放行函数
     */
    let token = userStore.token
    if (!token) {
      //用户未登录①
      if (to.path === '/login') {
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      //用户登录成功②
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        //判断用户信息是否存在。
        if (Object.keys(userStore.loginUserInfo).length == 0) {
          //没有用户信息进行获取。
          try {
            await userStore.getUserInfo()
            next()
          } catch (error) {
            /**
             * 如果没能获取用户信息，可能为以下情况：
             * 1、token过期。
             * 2、用户手动修改token
             */
            //1、用户相关数据清空 || 告知服务器
            userStore.userLoginOut()
            //2、跳转至登录页
            next({ path: '/login' })
          }
        } else {
          next()
        }
      }
    }
  },
)
//全局后置首位。
router.afterEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    document.title = `${setting.title} - ${to.meta.title}`
    NProgress.done()
  },
)

//问题1、路由鉴权
/**
 * ①用户未登录：可以访问login，其余路由禁止访问。(利用token进行判断)
 * ②用户登录成功：不可访问login并指向[首页]，其余路由可以访问。
 */
