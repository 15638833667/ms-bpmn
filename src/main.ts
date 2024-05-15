import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import MsBpmnJs from '../packages'
// 引入字体图标
import { importIconFontStyle } from './utils/index.js'
importIconFontStyle()


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(MsBpmnJs)

app.mount('#app')
