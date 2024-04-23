
<template>
  <div class="box">
    <h2 class="title">常用工具函数：</h2>
    <ul class="list">
      <li class="tip mt10"><span class="label">dateFormat:</span> 简单易用的日期格式化函数！</li>
      <li class="tip"><span class="label">requestAnimationFrame:</span> 针对不同浏览器进行兼容处理！</li>
      <li class="tip"><span class="label">cancelAnimationFrame:</span> 针对不同浏览器进行兼容处理！</li>
      <li class="tip"><span class="label">rafTimeout:</span> 使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！</li>
      <li class="tip"><span class="label">cancelRaf:</span> 用于取消 rafTimeout 函数！</li>
      <li class="tip"><span class="label">throttle:</span> 使用 rafTimeout 实现的节流函数！</li>
      <li class="tip"><span class="label">debounce:</span> 使用 rafTimeout 实现的防抖函数！</li>
      <li class="tip"><span class="label">add:</span> 消除js加减精度问题的加法函数！</li>
      <li class="tip"><span class="label">downloadFile:</span> 下载文件并自定义文件名，未传文件名时，从文件地址中自动获取文件名称！</li>
      <li class="tip"><span class="label">formatNumber:</span> 数字格式化函数！</li>
      <li class="tip"><span class="label">toggleDark:</span> 一键切换暗黑模式函数！</li>
    </ul>
  </div>
</template>
<script setup lang="ts">

// import.meta.glob 都支持以字符串形式导入文件，类似于 以字符串形式导入资源
const modules = import.meta.glob('../../package.json', { eager: true })
const url = '../../package.json'
// 字符串类型对象
type Recordable<T = any> = Record<string, T>
const dependencies = (modules as Recordable)[url].dependencies
console.log('dependencies', dependencies)

</script>
<style lang="scss">
.box {
  padding: 20px;
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
      font-size: 16px;
      .label {
        margin-right: 5px;
      }
    }
  }
}
</style>
