import { createApp } from 'vue'
import App from './App.vue'
// element-plus与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要配置代码。
import 'virtual:svg-icons-register'
//引入自定义插件对象
import globalComponet from './components'
//自定义scss
import '@/styles/index.scss'
//引入路由
import router from './router'
import './permisstion'
//引入pinia
import pinia from './store'
//创建应用实例对象
const app = createApp(App)
//安装Element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus 国际化
})

app.use(globalComponet)
app.use(router)
app.use(pinia)
app.mount('#app')
