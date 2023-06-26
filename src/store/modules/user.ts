//create user related warehouses
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginForm, loginReturnsData } from '@/api/user/type'
import type { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

//create user small warehouses
const useUserStore = defineStore('User', {
  //small warehouses
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  //
  actions: {
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
  },
  //
  getters: {},
  //
})

export default useUserStore
