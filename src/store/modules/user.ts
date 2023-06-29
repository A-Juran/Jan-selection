//create user related warehouses
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, userLoginOut } from '@/api/user'
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routers'

//create user small warehouses
const useUserStore = defineStore('User', {
  //small warehouses
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      loginUserInfo: {},
    }
  },
  //
  actions: {
    //用户登录
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)
      //login success
      if (result.code == 200 && result != null) {
        this.token = result.data
        SET_TOKEN(result.data)
        return Promise.resolve('ok')
      }
      //login fail
      return Promise.reject(new Error(result.message))
    },
    //获取用户信息
    async getUserInfo() {
      //获取用户信息进行存储。
      const result: userInfoResponseData = await reqUserInfo()
      if (result.code == 200 && result !== null) {
        this.loginUserInfo['username'] = result.data.name
        this.loginUserInfo['avatar'] = result.data.avatar
        return Promise.resolve('ok')
      }
      return Promise.reject(new Error(result.message))
    },
    //退出登录
    async userLoginOut() {
      //通知后端退出
      let result: any = await userLoginOut()
      if (result.code === 200) {
        //清除本地信息
        this.token = ''
        this.loginUserInfo = {}
        REMOVE_TOKEN()
        return Promise.resolve('ok')
      }
      return Promise.reject(new Error(result.message))
    },
  },
  //
  getters: {},
  //
})

export default useUserStore
