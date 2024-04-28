import type { App } from 'vue'
import MsBpmn from './MsBpmn.vue'

// 使用install方法，在app.use挂载
MsBpmn.install = (app: App) => {
  app.component(MsBpmn.__name as string, MsBpmn)
}

export default MsBpmn
