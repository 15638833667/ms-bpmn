import DefaultTheme from 'vitepress/theme'
import './global.scss' 

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import Vue3ComponentTemplate from '../../../packages'
import '../../../packages/scss/global.scss'


export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    // app.use(ElementPlus)
    app.use(Vue3ComponentTemplate)
  }
}
