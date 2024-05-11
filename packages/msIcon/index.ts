
import type { App } from 'vue'
import MsIcon from './MsIcon.vue'

// 使用install方法，在app.use挂载
MsIcon.install = (app: App) => {
  app.component(MsIcon.__name as string, MsIcon)
}

export default MsIcon