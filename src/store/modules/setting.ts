import { SettingState } from './types/types'
import { defineStore } from 'pinia'
// 小仓库
const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    isCollpase: false,
  }),
  actions: {
    SET_IS_COLLPASE(v: boolean) {
      this.isCollpase = v
    },
  },
  getters: {
    GET_IS_COLLPASE(state) {
      return state.isCollpase
    },
  },
})

export default useSettingStore
