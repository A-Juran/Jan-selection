//Login interface needs to carry parameters type.
export interface loginFormData {
  username: string
  password: string
}

//define all intereface reture data type ts 
export interface ResPoneseData {
  code: number,
  message: string,
  ok: boolean
}


//Login interface returns data type.
export interface loginResponseData extends ResPoneseData {
  data: string
}

//get UserInfo returns data type.
export interface userInfoResponseData extends ResPoneseData {
  data: {
    name: string,
    avatar: string[]
    roles: string[],
    routes: string[],
    buttons: string[],
  }
}