//本地token存储
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('token', token)
}

//本地token读取
export const GET_TOKEN = () => {
  return localStorage.getItem('token')
}

//退出删除本地数据
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('token')
}
