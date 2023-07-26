//引入请求封装对象
import request from "@/utils/request";
//返回数据类型
import type { UserInfoDT,userDT } from '@/api/acl/user/type'
import { REMOVE_TOKEN } from "@/utils/token";

//API同一管理
enum API {
    GET_USER_INFO_URL = '/admin/acl/user',
    SAVE_USER_INFO_URL = '/admin/acl/user/save',
    UPDATE_USER_INFO_URL = '/admin/acl/user/update'
}

/**
 * 获取用户信息
 * @param page 页
 * @param limit 数量
 * @returns 
 */
export const getUserInfo = (page: number, limit: number) =>
    request.get<any, UserInfoDT>(API.GET_USER_INFO_URL + `/${page}/${limit}`)


/**
 * 保存|更新用户信息
 * @param userInfo 用户信息实体
 * @returns 
 */
export const saveUserInfo = (userInfo:userDT) => {
    if(userInfo.id){
        return request.put<any,any>(API.UPDATE_USER_INFO_URL,userInfo)
    }else{
        return request.post<any,any>(API.SAVE_USER_INFO_URL,userInfo)
    }
}

