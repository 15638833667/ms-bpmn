import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
import dts from 'vite-plugin-dts';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      include: ['packages/**/*']
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './packages')
    }
  },
  build: {
    outDir: 'dist',
    lib: { // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      formats: ['es', 'umd'],
      // __dirname 的值是 vite.config.ts 文件所在目录
      entry: resolve(__dirname, 'packages', 'index.ts'),  // entry 是必需的，因为库不能使用HTML作为入口。
      name: 'Vue3ComponentTemplate', // 暴露的全局变量
      fileName: 'index' // 输出的包文件名，默认是 package.json 的 name 选项
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          "element-plus": "ElementPlus"
        }
      }
    }
  }
});
