//书写属性相关的API文件
import request from '@/utils/request'
import type {
  categoryResponseDataType,
  topClassDataType,
  topClassData,
  categoryAttrResDT
} from './type'

//枚举请求接口
enum API {
  //一级分类
  GET_ATTR_TOP_CLASS_URL = '/admin/product/getCategory1',
  //二级分类
  GET_ATTR_SECOND_CLASS_URL = '/admin/product/getCategory2',
  //三级分类
  GET_ATTR_THREE_CLASS_URL = '/admin/product/getCategory3',
  //获取分类下已有的属性与属性值
  GET_CATEGORY_ATTR_VALUE_URL = '/admin/product/attrInfoList',
}

export const getCategoryAttrValue = (
  c1: number | string,
  c2: number | string,
  c3: number | string,
) =>
  request.get<any, any>(API.GET_CATEGORY_ATTR_VALUE_URL + `/${c1}/${c2}/${c3}`)

/**
 * 获取三级分类
 * @param id 三级分类ID
 * @returns
 */
export const getAttrThreeClass = (id: number | string) =>
  request.get<any, categoryResponseDataType>(
    API.GET_ATTR_THREE_CLASS_URL + `/${id}`,
  )

/**
 * 获取二级分类
 * @param id 二级分类ID
 * @returns
 */
export const getAttrSecondClass = (id: number | string) =>
  request.get<any, categoryResponseDataType>(
    API.GET_ATTR_SECOND_CLASS_URL + `/${id}`,
  )

/**
 * 获取一级分类
 * @returns
 */
export const getAttrTopClass = () =>
  request.get<any, categoryResponseDataType>(API.GET_ATTR_TOP_CLASS_URL)

/**
 * 获取分类属性。
 * @param c1 一级分类标识
 * @param c2 二级分类标识
 * @param c3 三级分类标识
 * @returns 
 */
export const getCategoryAttrVale = (c1: string | number, c2: string | number, c3: string | number) =>
  request.get<any, categoryAttrResDT>(API.GET_CATEGORY_ATTR_VALUE_URL + `/${c1}/${c2}/${c3}`);