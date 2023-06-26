//安装自定义插件 使用use自动执行install方法。
//自定义组件文件
import SvgIcon from '@/components/SvgIcon/index.vue'
//全局对象
const allGloablComponent = { SvgIcon }
//对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGloablComponent).forEach((e) => {
      //注册全局组件
      app.component(e, allGloablComponent[e])
    })
  },
}
