//create user related warehouses
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { loginForm, loginReturnsData } from '@/api/user/type'
import type { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute } from '../../router/routers'

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
      //login fail
      if (result.code == 201) {
        return Promise.reject(new Error(result.data.message))
      }
      //login success
      this.token = result.data.token as string
      SET_TOKEN(result.data.token as string)
      return Promise.resolve()
    },
    //获取用户信息
    async getUserInfo() {
      //获取用户信息进行存储。
      const res = await reqUserInfo()
      if (res.code == 200 && res !== null) {
        this.loginUserInfo = res.data.checkUser
      }
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
