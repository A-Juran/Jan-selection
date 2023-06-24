//axios二次封装：使用请求拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

//1、利用axsio对象的create方法，创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //携带API
  timeout: 3000,
})

//2、ins实例添加请求与响应拦截器。
request.interceptors.request.use(
  (config) => {
    console.log(config)
    // 在发送请求之前做些什么
    // 携带token ……
    // config.headers.token = '123'
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

//3、添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'Token 过期'
        break
      case 403:
        message = '没有权限'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '请联系网站管理员，处理改问题'
        break
    }

    ElMessage({
      type: 'error',
      message,
    })

    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default request
