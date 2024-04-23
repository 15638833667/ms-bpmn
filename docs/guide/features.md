# 特性


## 简要介绍

- 该组件库采用 `Vue@{{ getVersion('vue') }}` + `TypeScript@{{ getVersion('typescript') }}` + `Vite@{{ getVersion('vite') }}` + `Scss@{{ getVersion('scss') }}` 实现！
- 所有组件样式 `CSS` 均使用 `box-sizing: border-box;` 模式！

## 使用方式

- 全局引入并注册所有组件
- 按需引入并注册部分组件

<script setup lang="ts">
import pkg from '../../package.json'

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies
function getVersion (target: string): string {
  for (let name of Object.keys(dependencies)) {
    if (name === target) {
      return dependencies[name].replace('^', '')
    }
  }
  for (let name of Object.keys(devDependencies)) {
    if (name === target) {
      return devDependencies[name].replace('^', '')
    }
  }
  return ''
}
</script>
