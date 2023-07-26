import type { ResPoneseData } from '@/api/commonTypes'
//用户信息数据类型
export interface userDT {
    id?: number | string,
    createTime?: string
    updateTime?: string,
    username?: string,
    password?: string,
    name?: string,
    phone?: string,
    roleName?: string
}

export type userDTList = userDT[];

export interface UserInfoDT extends ResPoneseData {
    data: {
        records: userDTList,
        total: number,
        size: number,
        current: number,
        orders: [],
        optimizeCountSql: boolean,
        hitCount: boolean,
        countId: number,
        maxLimit: number,
        searchCount: boolean,
        pages: number
    }
}