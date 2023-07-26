// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/study/vue/vue3/project/Jan-selection/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.9_@types+node@20.3.1_sass@1.26.5/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/study/vue/vue3/project/Jan-selection/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.1.0_vite@4.3.9_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///E:/study/vue/vue3/project/Jan-selection/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-svg-icons@2.0.1_vite@4.3.9/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import { viteMockServe } from "file:///E:/study/vue/vue3/project/Jan-selection/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@4.3.9/node_modules/vite-plugin-mock/dist/index.js";
var __vite_injected_original_dirname = "E:\\study\\vue\\vue3\\project\\Jan-selection";
var vite_config_default = defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        localEnabled: command === "serve"
        //保证开发阶段可以使用mock接口
      }),
      createSvgIconsPlugin({
        //Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        //Specify symbolId format
        SymbolId: "icon-[dir]-[name]"
      })
    ],
    css: {
      //css预处理器
      preprocessorOptions: {
        scss: {
          //初始化样式
          javascriptEnabled: true,
          additionalData: `@import "@/styles/variable.scss";`
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
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
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzdHVkeVxcXFx2dWVcXFxcdnVlM1xcXFxwcm9qZWN0XFxcXEphbi1zZWxlY3Rpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHN0dWR5XFxcXHZ1ZVxcXFx2dWUzXFxcXHByb2plY3RcXFxcSmFuLXNlbGVjdGlvblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc3R1ZHkvdnVlL3Z1ZTMvcHJvamVjdC9KYW4tc2VsZWN0aW9uL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbi8vdml0ZS1wbHVnaW4tbW9jayhcdTY3MkNcdTU3MzBcdTU0OENcdTRFQTdcdTU0QzFcdTZBMjFcdTYyREYvcGFja2FnZS92aXRlLXBsdWdpbi1tb2NrL3YvMi45LjgpXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgLy9cdTgzQjdcdTUzRDZcdTVCRjlcdTVFOTRcdTc2ODRcdTczQUZcdTU4ODNcdTVCRjlcdThDNjFcbiAgbGV0IGVudjogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcbiAgY29uc29sZS5sb2coZW52KVxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgbG9jYWxFbmFibGVkOiBjb21tYW5kID09PSAnc2VydmUnLCAvL1x1NEZERFx1OEJDMVx1NUYwMFx1NTNEMVx1OTYzNlx1NkJCNVx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOG1vY2tcdTYzQTVcdTUzRTNcbiAgICAgIH0pLFxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICAvL1NwZWNpZnkgdGhlIGljb24gZm9sZGVyIHRvIGJlIGNhY2hlZFxuICAgICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgICAgLy9TcGVjaWZ5IHN5bWJvbElkIGZvcm1hdFxuICAgICAgICBTeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgY3NzOiB7XG4gICAgICAvL2Nzc1x1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgLy9cdTUyMURcdTU5Q0JcdTUzMTZcdTY4MzdcdTVGMEZcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7YCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH0sXG4gICAgICBleHRlbnNpb25zOiBbJy5tanMnLCAnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nLCAnLnZ1ZSddLFxuICAgIH0sXG4gICAgLy9cdTY3MERcdTUyQTFcdTU2NjhcdTRFRTNcdTc0MDZcdTVCRjlcdThDNjFcdTMwMDJcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFtlbnYuVklURV9BUFBfQkFTRV9BUEldOiB7XG4gICAgICAgICAgLy9cdTY3MERcdTUyQTFcdTU2NjhcdTU3MzBcdTU3NDBcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9CQVNFX1NFUlZFUixcbiAgICAgICAgICAvL1x1NjYyRlx1NTQyNlx1NEVFM1x1NzQwNlx1OERFOFx1NTdERlxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAvL1x1OERFRlx1NUY4NFx1OTFDRFx1NTE5OVx1ODlDNFx1NTIxOVxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsY0FBYyxlQUFlO0FBQ3pWLE9BQU8sU0FBUztBQUNoQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFHakIsU0FBUyxxQkFBcUI7QUFOOUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUVqRCxNQUFJLE1BQThCLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUM3RCxVQUFRLElBQUksR0FBRztBQUNmLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLGNBQWM7QUFBQTtBQUFBLFFBRVosY0FBYyxZQUFZO0FBQUE7QUFBQSxNQUM1QixDQUFDO0FBQUEsTUFDRCxxQkFBcUI7QUFBQTtBQUFBLFFBRW5CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQTtBQUFBLFFBRTFELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQSxNQUVILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQTtBQUFBLFVBRUosbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3BDO0FBQUEsTUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLElBQ3BFO0FBQUE7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxpQkFBaUIsR0FBRztBQUFBO0FBQUEsVUFFdkIsUUFBUSxJQUFJO0FBQUE7QUFBQSxVQUVaLGNBQWM7QUFBQTtBQUFBLFVBRWQsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
