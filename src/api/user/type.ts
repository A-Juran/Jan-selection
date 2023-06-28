//Login interface needs to carry parameters type.
export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token: string,
  message: string
}
//Login interface returns data type.
export interface loginReturnsData {
  code: number
  data: dataType
}

/**
 * define the data types related to
 *  user information returned by the server
 * */
export interface userReturnData {
  code: number
  data: user
}

interface user {
  message: string
  checkUser: userInfo
}

export interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: Array<string>
  buttons: Array<string>
  routes: Array<string>
  token: string
}
