
<template>
  <div class="ms-bpmn-container">
    <ToolBar class="tool-bar" v-if="showToolBar" :bpmnModeler="bpmnModeler" />
    <div class="canvas" ref="canvasRef"></div>
    <div id="ms-bpmn-properties-panel" class="panel"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import ToolBar from './components/toolBar/index.vue';
// 引入相关的依赖
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel'
import BpmnModeler from 'bpmn-js/lib/Modeler';
import CamundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json'
import MinimapModule from "diagram-js-minimap";
// import GridLineModule from 'diagram-js-grid-bg' // 网格线
import GridModule from 'diagram-js-grid'; // 网格背景

// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// 节点属性面板
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'
import "diagram-js-minimap/assets/diagram-js-minimap.css";

import CustomPaletteModule from './components' // 自定义工具栏

import useGetData from './bpmnMixins/useGetData' // 获取数据
import useBpmnListener from './bpmnMixins/useListener' // 保存数据

const { createNewDiagram } = useGetData()
const { addBpmnListener, addModelerListener, addEventBusListener } = useBpmnListener()

// bpmn建模器
let bpmnModeler = null;
const canvasRef = ref(null);
const showToolBar = ref(false);

const init = () => {
  // 获取到属性ref为“canvas”的dom节点
  console.log(canvasRef.value);
  // 建模
  bpmnModeler = new BpmnModeler({
    container: canvasRef.value,
    //添加控制板
    propertiesPanel: {
      parent: '#ms-bpmn-properties-panel'
    },
    additionalModules: [
      // 右边的属性栏
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      // 小地图
      MinimapModule,
      // 网格线
      // GridLineModule,
      // 网格背景
      GridModule,
      // 自定义工具栏
      CustomPaletteModule
    ],
    // gridLine: {
    //   smallGridSpacing: 10,
    //   gridSpacing: 50,
    //   gridLineStroke: 0.2,
    //   gridLineOpacity: 1,
    //   gridLineColor: '#ccc'
    // },
    minimap: {
      open: false
    },
    moddleExtensions: {
      camunda: CamundaModdleDescriptor
    }
  });
  // 初始化获取xml
  createNewDiagram(bpmnModeler).then(() => {
    initSuccess(bpmnModeler)
  })
};

const initSuccess = (bpmnModeler) => {
  console.log('创建成功!')
  addBpmnListener(bpmnModeler)
  addModelerListener(bpmnModeler)
  addEventBusListener(bpmnModeler)
}
provide('test', 'bpmnModelerTest')

onMounted(() => {
  init()
  showToolBar.value = true
  console.log('bpmnModeler', bpmnModeler)
  provide('bpmnModeler', bpmnModeler)
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

