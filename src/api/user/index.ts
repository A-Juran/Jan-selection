import request from '../../utils/request'

//unified interface management
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  GET_USERINFO_URL = '/admin/acl/index/info',
  LOGINOUT_URL = '/admin/acl/index/logout'
}

//login method
export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN_URL, data);

//get User Info
export const reqUserInfo = () => request.get<any, any>(API.GET_USERINFO_URL);

//loginout
export const userLoginOut = () => request.post<any, any>(API.LOGINOUT_URL);