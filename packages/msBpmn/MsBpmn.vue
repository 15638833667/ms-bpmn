
<template>
  <div class="ms-bpmn-container">
    <div class="canvas" ref="canvasRef"></div>
    <div id="ms-bpmn-properties-panel" class="panel"></div>
  </div>
</template>
<script setup lang="ts">
// 引入相关的依赖
import { ref, onMounted } from 'vue';
import useInit from './bpmnMixins/useInit'
// bpmn建模器
let bpmnModeler = null;
const canvasRef = ref(null);

const { init } = useInit(bpmnModeler, canvasRef)

onMounted(() => {
  init()
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

