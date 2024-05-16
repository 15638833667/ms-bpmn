<template>
  <div class="custom-bpmn-panel">
    <el-input v-model="name" @change="nameChange" placeholder="请输入流程名称"></el-input>
    <el-button type="primary" @click="handleClick">修改信息</el-button>
    自定义面板
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const panelFormEmit = defineEmits(['form-change'])

const formData = defineProps({
  formData: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const name = ref('') // 节点名称\

watch(
  () => formData.formData, 
  (newVal) => {
    console.log('formData', newVal)
    name.value = newVal.name
  },
  {
    immediate: true,
    deep: true
  }
)
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