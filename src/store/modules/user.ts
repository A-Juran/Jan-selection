//create user related warehouses
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { loginForm } from '@/api/user/type'
//create user small warehouses
const useUserStore = defineStore('User', {
  //small warehouses
  state: () => {
    return {
      token: localStorage.getItem('token'),
    }
  },
  //
  actions: {
    async userLogin(data: loginForm) {
      const result = await reqLogin(data)
      console.log(result.data)
      //login fail
      if (result.code == 201) {
        return Promise.reject(new Error(result.data.message))
      }
      //login success
      this.token = result.data.token
      localStorage.setItem('token', result.data.token)
      return Promise.resolve()
    },
  },
  //
  getters: {},
  //
})

export default useUserStore
