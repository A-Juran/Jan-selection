//Login interface needs to carry parameters type.
export interface loginForm {
  username: String
  password: String
}
interface dataType {
  token: String
}
//Login interface returns data type.
export interface loginReturnsData {
  code: Number
  data: dataType
}

/**
 * define the data types related to
 *  user information returned by the server
 * */
export interface userReturnData {
  code: Number
  data: user
}

interface user {
  checkUser: userInfo
}

interface userInfo {
  userId: Number
  avatar: String
  username: String
  password: String
  desc: String
  roles: Array<String>
  buttons: Array<String>
  routes: Array<String>
  token: String
}
