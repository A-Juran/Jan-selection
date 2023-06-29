import request from '../../utils/request'
import type { loginFormData, loginResponseData, userInfoResponseData } from './type'

//unified interface management
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  GET_USERINFO_URL = '/admin/acl/index/info',
  LOGINOUT_URL = '/admin/acl/index/logout',
}

//login method
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//get User Info
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.GET_USERINFO_URL)

//loginout
export const userLoginOut = () => request.post<any, any>(API.LOGINOUT_URL)
