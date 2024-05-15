<template>
  <div>
    自定义面板
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
console.log('msBpmn自定义面板')
const bpmnModeler = inject('bpmnModeler')
onMounted(() => {
  console.log('bpmnModeler', bpmnModeler)
})
</script>
<style lang='scss' scoped>
  
</style>