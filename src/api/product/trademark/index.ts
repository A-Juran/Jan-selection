/**
 * edit trademark interface
 */
import request from '@/utils/request'
import { TradeMarkResponseDataType } from '@/api/product/trademark/type'
//接口
enum API {
  GET_TRADEMARK_INF_URL = '/admin/product/baseTrademark',
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
