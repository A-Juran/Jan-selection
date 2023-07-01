//安装自定义插件 使用use自动执行install方法。
//自定义组件文件
import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Category from './Category/index.vue'
//全局对象
const allGloablComponent = { Category, SvgIcon, ElementPlusIconsVue }
const assingObject = {}
//不是对象进行合并处理
const assignComponentObject = (oldObject, newObject) => {
  oldObject = Object.assign(oldObject, newObject)
}
//对象合并
for (const [key, component] of Object.entries(allGloablComponent)) {
  assingObject[key] = component
  if (!(component instanceof Object)) {
    assignComponentObject(assingObject, component)
  }
}
//对外暴露插件对象
export default {
  install(app) {
    Object.keys(assingObject).forEach((e) => {
      //注册全局组件
      app.component(e, assingObject[e])
    })
  },
}
