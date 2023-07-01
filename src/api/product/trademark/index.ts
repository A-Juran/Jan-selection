/**
 * edit trademark interface
 */
import request from '@/utils/request'
import {
  TradeMarkResponseDataType,
  TradeMarkDataType,
} from '@/api/product/trademark/type'
//接口
enum API {
  GET_TRADEMARK_INF_URL = '/admin/product/baseTrademark',
  ADD_TRADEMARK_INF_URL = '/admin/product/baseTrademark/save',
  UPDATE_TRADEMARK_INFO_URL = '/admin/product/baseTrademark/update',
  DEL_TRADEMARK_INFO_URL = '/admin/product/baseTrademark/remove/',
}

/**
 * 删除商品
 * @param id
 * @returns
 */
export const delTradeMark = (id: number) =>
  request.delete<any, any>(API.DEL_TRADEMARK_INFO_URL + `/${id}`)

/**
 * 商品修改|新增
 * @param data 商品数据
 * @returns
 */
export const saveOrUploadTradeMarkInfo = (data: TradeMarkDataType) => {
  if (!data.id) {
    //添加
    return request.post<any, any>(API.ADD_TRADEMARK_INF_URL, data)
  } else {
    //更细
    return request.put<any, any>(API.UPDATE_TRADEMARK_INFO_URL, data)
  }
}

/**
 * 获取已有品牌接口方法。
 * @param page  获取第几页
 * @param limit 获取条数
 * @returns
 */
export const getTradeMarkInfo = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseDataType>(
    API.GET_TRADEMARK_INF_URL + `/${page}/${limit}`,
  )
