
<template>
  <div class="ms-bpmn-container">
    <div class="canvas" ref="canvasRef"></div>
    <div id="js-properties-panel" class="panel"></div>
  </div>
</template>
<script setup lang="ts">
// 引入相关的依赖
import { ref, onMounted } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { xmlStr } from './mock/xmlStr' // 这里是直接引用了xml字符串

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule
} from 'bpmn-js-properties-panel'

import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json'

// bpmn建模器
let bpmnModeler = null;

const canvasRef = ref(null);

const init = () => {
  // 获取到属性ref为“canvas”的dom节点
  console.log(canvasRef.value);
  // 建模
  bpmnModeler = new BpmnModeler({
    container: canvasRef.value,
    //添加控制板
    propertiesPanel: {
      parent: '#js-properties-panel'
    },
    additionalModules: [
      // 右边的属性栏
      BpmnPropertiesPanelModule,
      // 左边工具栏以及节点
      BpmnPropertiesProviderModule
    ],
    moddleExtensions: {
      camunda: camundaModdleDescriptor
    }
  });
  createNewDiagram();
};

const createNewDiagram = async () => {
  // 将字符串转换成图显示出来
  const res = await bpmnModeler.importXML(xmlStr);
  if (res) {
    // 这里是成功之后的回调, 可以在这里做一系列事情
    console.log('res', res);
  }
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

