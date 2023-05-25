import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  //    // 强制预构建插件包
  //  optimizeDeps: {
  //   //检测需要预构建的依赖项
  //   // entries: [],
  //   //默认情况下，不在 node_modules 中的，链接的包不会预构建
  //   include: ['Login','Home','CommodityManagement','TradeOrder','UserManagement','MenuManagement','RoleManagement'],
  //   // exclude:['your-package-name'] //排除在优化之外
  //  },
  // 静态资源路径
  base: './',
  // 引入第三方的配置
  optimizeDeps: {
    // include: ['@ant-design/icons', 'react', 'react-dom', 'react-router-dom',],
    exclude: ['@babel/runtime']
  },
  // 别名
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      "~": "node_modules",
      '@': '/src'
    }
  },
  // css预处理器
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 本地服务配置
  server: {
    // 本地端口
    port: 3000,
    // 是否自动打开浏览器
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 打包配置
  build: {
    // 压缩
    // minify: 'esbuild',
    // 打包后的文件夹
    // outDir: 'dist',
    // 打包后是否生成 source map 文件
    // sourcemap: false,
    // 打包后是否生成 manifest.json 文件
    // manifest: false,
    target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'dist', // 指定输出路径
    assetsPublicPath: './', // 指定生成静态资源的存放路径
    // assetsDir: 'assets', // 指定生成静态资源的存放路径
    // assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
    chunkSizeWarningLimit: 1500, // 警告的 chunk 大小超过限制（以 kbs 为单位）
    // cssCodeSplit: true, // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
    // sourcemap: false, // 构建后是否生成 source map 文件
    // minify: 'terser', // 混淆器，terser构建后文件体积更小
    // write: true,   //设置为 false 来禁用将构建后的文件写入磁盘  
    emptyOutDir: true,  //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。  
    // brotliSize: true,  //启用/禁用 brotli 压缩大小报告 
    // chunkSizeWarningLimit: 500,  //chunk 大小警告的限制 
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // }, 
    // 打包后是否生成 chunk
    rollupOptions: {

      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        }
      },
    }
  },


})
