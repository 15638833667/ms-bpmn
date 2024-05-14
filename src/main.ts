import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import MsBpmnJs from '../packages'
// 引入字体图标
import { importIconFontStyle } from './utils/index.js'

importIconFontStyle()

// // 引入icon
// import '//at.alicdn.com/t/c/font_4301118_pj6310xqxue.css'

// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// 节点属性面板
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(MsBpmnJs)

app.mount('#app')
