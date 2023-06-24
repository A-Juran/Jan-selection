//自定义组件文件
import SvgIcon from '@/components/SvgIcon/index.vue'
//全局对象
const allGloablComponent = { SvgIcon }
console.log(Object.keys(allGloablComponent))
//对外暴露插件对象
export default {
  install(app) {
    console.log(app)
    Object.keys(allGloablComponent).forEach((e) => {
      //注册全局组件
      app.component(e, allGloablComponent[e])
    })
  },
}
