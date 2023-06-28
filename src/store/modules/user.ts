//create user related warehouses
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { loginForm, loginReturnsData, userReturnData } from '@/api/user/type'
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
    async userLogin(data: loginForm) {
      const result: loginReturnsData = await reqLogin(data)
      //login success
      if (result.code == 200 && result != null) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return Promise.resolve('ok')
      }
      //login fail
      return Promise.reject(new Error(result.data.message))
    },
    //获取用户信息
    async getUserInfo() {
      //获取用户信息进行存储。
      const result: userReturnData = await reqUserInfo()
      if (result.code == 200 && result !== null) {
        this.loginUserInfo = result.data.checkUser
        return Promise.resolve('ok');
      }
      return Promise.reject(new Error(result.data.message))
    },
    //退出登录
    userLoginOut() {
      //通知后端退出
      //清除本地信息
      this.token = ''
      this.loginUserInfo = {}
      REMOVE_TOKEN()
    },
  },
  //
  getters: {},
  //
})

export default useUserStore
