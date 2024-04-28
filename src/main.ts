import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import MsBpmnJs from '../packages'


const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(ElementPlus)
app.use(MsBpmnJs)

app.mount('#app')
