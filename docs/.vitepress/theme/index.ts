import DefaultTheme from 'vitepress/theme'
import './global.scss' 

import Vue3ComponentTemplate from '../../../dist/vue3-component-template'
import '../../../dist/index.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(Vue3ComponentTemplate)
  }
}
