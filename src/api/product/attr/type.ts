//引入公共请求返回参数类型
import { ResPoneseData } from '@/api/commonTypes'

export interface categoryResponseDataType extends ResPoneseData {
  data: topClassData
}

export interface topClassDataType {
  id: number | string
  name: string
  category1Id?: number
  category2Id?: number
  createTime: Date
  updateTime: Date
}

export type topClassData = topClassDataType[]

//定义仓库中分类数据ts类型
export interface storeCategoryDataType {
  topCategory: topClassData
  secondCategory: topClassData
  threeCategory: topClassData
  selectTopCategory: number | string
  selectSecondCategory: number | string
  selectThreeCategory: number | string
}

/**
 * 属性ts类型
 */
//分类型中属性ts类型
export interface attrValueDT {
  id: number | string
  valueName: string
  attrId: number
}
export type attrValueDTList = attrValueDT[]

//分类ts类型
export interface categoryAttrValueDT {
  id: string | number
  attrName: string | null
  categoryId: number | string
  categoryLevel: number | string
  attrValueList: attrValueDTList
}
export type categorAttrValueDTList = categoryAttrValueDT[]

//查询分类返回ts数据类型。
export interface categoryAttrResDT extends ResPoneseData {
  data: categorAttrValueDTList
}
