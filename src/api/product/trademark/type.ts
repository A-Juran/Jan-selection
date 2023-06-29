import type { ResPoneseData } from '@/api/commonTypes'

//get tradeMarkInfoData
export interface TradeMarkResponseDataType extends ResPoneseData {
  data: {
    total: number
    size: number
    current: number
    optimizeCountSql: boolean
    hitCount: boolean
    countId: number
    maxLimit: number
    searchCount: boolean
    pages: number
    records: Records
  }
}

//已有品牌得ts数据类型
export interface TradeMarkDataType {
  id?: number
  createTime: Date
  updateTime: Date
  tmName: string
  logoUrl: string
}

//包含全部品牌数据得ts类型
export type Records = TradeMarkDataType[]
