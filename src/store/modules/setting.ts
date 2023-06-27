import { SettingState } from './types/types'
import { defineStore } from 'pinia'
// 小仓库
const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    isCollpase: false,
    refsh: false,
  }),
  actions: {
    SET_IS_COLLPASE(v: boolean) {
      this.isCollpase = v
    },
    RFESH() {
      this.refsh = true
    },
  },
  getters: {
    GET_IS_COLLPASE(state) {
      return state.isCollpase
    },
    GET_RFESH_STATUS(state) {
      return state.refsh
    },
  },
})

export default useSettingStore
