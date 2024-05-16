
<template>
  <div class="ms-bpmn-container">
    <ToolBar class="tool-bar" v-if="showComponentStatus" :bpmnModeler="bpmnModeler" />
    <div class="canvas" ref="canvasRef"></div>
    <div id="ms-bpmn-properties-panel" class="panel"></div>
    <CustomProperties  v-if="showComponentStatus"></CustomProperties>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import ToolBar from './components/toolBar/index.vue';

import CustomProperties from './components/customProperties/index.vue';

import useInit from './bpmnMixins/useInit'

// bpmn建模器
let bpmnModeler = null;
const canvasRef = ref(null);
const showComponentStatus = ref(false);

const { init } = useInit() // 初始化

provide('test', 'bpmnModelerTest')

onMounted(() => {
  bpmnModeler = init(canvasRef)
  showComponentStatus.value = true
  console.log('bpmnModeler', bpmnModeler)
  provide('bpmnModeler', bpmnModeler)
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

