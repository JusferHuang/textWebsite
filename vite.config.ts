import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
const resolve = (dir: string) => path.join(__dirname, dir); // 需安装插件@types/node  npm install --save @types/node

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
    }
  },
  // 样式相关规则
  css: {
    preprocessorOptions: {
      scss: {
        // 加载全局样式
      }
    }
  },

  // 为服务器设置代理规则
  // server: {
  //   host: '1.12.240.41',
  //   // port: 80,
  //   open: true,     // 运行自动打开浏览器
  //   proxy: {
  //     // 选项写法
  //     // "/api": {
  //     //   target: "https://jusfer.com",
  //     //   changeOrigin: true,
  //     //   rewrite: (path) => path.replace(/^\/api/, "")
  //     // }
  //   }
  // },

  // 打包相关规则
  build: {
    target: "es2020", // 指定es版本,浏览器的兼容性
    outDir: "dist", // 指定打包输出路径
    assetsDir: "assets",  // 指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, // 是否构建 source map文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  }
  
})
