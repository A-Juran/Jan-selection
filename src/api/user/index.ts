import request from '../../utils/request'
import type { loginForm, loginReturnsData, userReturnData } from './type'
//unified interface management
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/login',
}
//login method
export const reqLogin = (data: loginForm) =>
  request.post<any, loginReturnsData>(API.LOGIN_URL, data)
//get userInfo
export const getUserInfo = () => request.get<userReturnData>(API.USERINFO_URL)
