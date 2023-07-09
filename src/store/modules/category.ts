//商品分类全局组件。
import { defineStore } from 'pinia'
import {
  getAttrTopClass,
  getAttrSecondClass,
  getAttrThreeClass,
} from '@/api/product/attr'
import type {
  categoryResponseDataType,
  topClassDataType,
  topClassData,
  storeCategoryDataType,
} from '@/api/product/attr/type'

const useCategoryStore = defineStore('category', {
  state(): storeCategoryDataType {
    return {
      topCategory: [],
      secondCategory: [],
      threeCategory: [],
      selectTopCategory: '',
      selectSecondCategory: '',
      selectThreeCategory: '',
    }
  },
  actions: {
    //获取一级分类方法
    async getTopClass() {
      let res: categoryResponseDataType = await getAttrTopClass()
      if (res.code === 200) {
        this.topCategory = res.data
      }
    },
    //获取二级分类
    async getSecondClass() {
      let res: categoryResponseDataType = await getAttrSecondClass(
        this.selectTopCategory,
      )
      if (res.code === 200) {
        this.secondCategory = res.data
      }
    },
    //获取三级分类
    async getThreeClass() {
      let res: categoryResponseDataType = await getAttrThreeClass(
        this.selectSecondCategory,
      )
      if (res.code === 200) {
        this.threeCategory = res.data
      }
    },
  },
  getters: {},
})

export default useCategoryStore
