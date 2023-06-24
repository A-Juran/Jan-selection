import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
const resolve = (dir) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
//vite-plugin-mock(本地和产品模拟/package/vite-plugin-mock/v/2.9.8)
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
      }),
      createSvgIconsPlugin({
        //Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        //Specify symbolId format
        SymbolId: 'icon-[dir]-[name]',
      }),
    ],
    css: {
      //css预处理器
      preprocessorOptions: {
        scss: {
          //初始化样式
          javascriptEnabled: true,
          additionalData: `@import "@/styles/variable.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
  }
})
