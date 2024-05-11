
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel'

import CustomPaletteModule from '../components' // 自定义工具栏


import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json'

import BpmnModeler from 'bpmn-js/lib/Modeler';

import useGetData from './useGetData' // 获取数据
import useBpmnListener from './useListener' // 保存数据

const { createNewDiagram } = useGetData()
const { addBpmnListener, addModelerListener, addEventBusListener } = useBpmnListener()
export default function useInit(bpmnModeler, canvasRef) {

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
        BpmnPropertiesProviderModule,
        // 自定义工具栏
        CustomPaletteModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
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

  return {
    init
  };
}