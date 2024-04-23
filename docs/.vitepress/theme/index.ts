import DefaultTheme from 'vitepress/theme'
import './global.scss' // global scss
// import Vue3ComponentTemplate from 'vue3-component-template'
// import 'vue3-component-template/css'
import Vue3ComponentTemplate from '../../../dist/vue3-component-template'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(Vue3ComponentTemplate)
  }
}
