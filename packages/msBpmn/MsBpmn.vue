
<template>
  <div class="ms-bpmn-container">
    <ToolBar class="tool-bar" v-if="showComponentStatus" :bpmnModeler="bpmnModeler" />
    <div class="canvas" ref="canvasRef"></div>
    <!-- <div id="ms-bpmn-properties-panel" class="panel"></div> -->
    <CustomProperties v-if="showComponentStatus" :form-data="formData" @form-change="formChange"></CustomProperties>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, provide, onBeforeUnmount, reactive } from 'vue';
import ToolBar from './components/toolBar/index.vue';

import CustomProperties from './components/customProperties/index.vue';

import { useInit } from './bpmnMixins/useInit' // 初始化
const { init } = useInit() // 初始化
import { useBpmnListener } from './bpmnMixins/useListener' // 绑定卸载事件
const { addBpmnListener, addModelerListener, addElementListener, removeBpmnListener, removeModelerListener, removeElementListener } = useBpmnListener()

import { useGetData } from './bpmnMixins/useGetData' // 获取数据\
const { createNewDiagram } = useGetData()

import { useSaveData } from './bpmnMixins/useSaveData' // 保存数据
const { saveBpmnWithSVG, saveBpmnWithXML } = useSaveData()

let bpmnModeler = null; // bpmn建模器
const canvasRef = ref(null); // 画布
const showComponentStatus = ref(false); // 组件显示状态
const formData = reactive({
  name: 'test',
  label: 'test',
  description: new Date().getTime()
})
let actionElement = null; // 当前操作元素

provide('test', 'bpmnModelerTest') // provide 测试

const formChange = (val) => {
  const modeling = bpmnModeler.get('modeling')
  console.log('actionElement', actionElement)
  if(actionElement){
    modeling.updateProperties(actionElement, {
      name: val,
      label: val,
      description: new Date().getTime()
    })
    console.log('formChange', val)
  }
}
onMounted(() => {
  const initPromise = new Promise((resolve) => {
    bpmnModeler = init(canvasRef) // 初始化
    resolve(bpmnModeler)
  })
  showComponentStatus.value = true
  provide('bpmnModeler', bpmnModeler)
  initPromise.then(() => {
    createNewDiagram(bpmnModeler) // 创建新图
    addBpmnListener(bpmnModeler, (event) => { // 监听事件
    })
    addModelerListener(bpmnModeler, () => { // 监听事件

    })
    addElementListener(bpmnModeler, (event, eventType) => { // 监听事件
      const elementRegistry = bpmnModeler.get('elementRegistry');
      if (!event || !event.element) {
        actionElement = null
      } else {

        actionElement = event.element ? elementRegistry.get(event.element.id) : event.shape
        const elementBusinessObject = event.element.businessObject // 元素对象
        console.log('event', event.element.businessObject)
        formData.name = elementBusinessObject.name || '' // 元素名称
      }
      // if (eventType === 'element.changed') { // 元素改变事件
      //   // that.elementChanged(e)
      // } else if (eventType === 'element.click') { // 点击事件
      //   console.log('点击了element', event)
      // } else if (eventType === 'element.updateLabel') {
      //   console.log('element.updateLabel', event.element)
      // }
    })
  })


});

onBeforeUnmount(() => { // 卸载事件
  removeBpmnListener(bpmnModeler)
  removeModelerListener(bpmnModeler)
  removeElementListener(bpmnModeler)
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

