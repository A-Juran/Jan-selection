//引入公共请求返回参数类型
import { ResPoneseData } from '@/api/commonTypes'

export interface attrResponseDataType extends ResPoneseData {
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