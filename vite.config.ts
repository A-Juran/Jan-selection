import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
//vite-plugin-mock(本地和产品模拟/package/vite-plugin-mock/v/2.9.8)
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({ command, mode }) => {
  //获取各个环境下对应的环境对象
  let env: Record<string, string> = loadEnv(mode, process.cwd());
  console.log(env)
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
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    //服务器代理对象。
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //服务器地址
          target: env.VITE_APP_BASE_SERVER,
          //是否代理跨域
          changeOrigin: true,
          //路径重写规则
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
