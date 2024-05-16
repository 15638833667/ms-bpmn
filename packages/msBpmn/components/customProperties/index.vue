<template>
  <div class="custom-bpmn-panel">
    <el-input v-model="name" @change="nameChange" placeholder="请输入流程名称"></el-input>
    <el-button type="primary" @click="handleClick">修改信息</el-button>
    自定义面板
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const panelFormEmit = defineEmits(['form-change'])

const name = ref('') // 节点名称\

const nameChange = () => {
  panelFormEmit('form-change', name.value)
}


const handleClick = () => {
  console.log('handleClick')
}
onMounted(() => {
  
})
</script>
<style lang='scss' scoped>
  
</style>