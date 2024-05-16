// 引入相关的依赖
// import {
//   BpmnPropertiesPanelModule,
//   BpmnPropertiesProviderModule
// } from 'bpmn-js-properties-panel'
import BpmnModeler from 'bpmn-js/lib/Modeler';
import CamundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json'
import MinimapModule from "diagram-js-minimap";
// import GridLineModule from 'diagram-js-grid-bg' // 网格线
import GridModule from 'diagram-js-grid'; // 网格背景

// import CustomPaletteModule from '../components' // 自定义工具栏节点、渲染节点、节点配置

// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// 节点属性面板
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'
import "diagram-js-minimap/assets/diagram-js-minimap.css";

export const useInit = () => {
  let bpmnModeler = null
  const init = (canvasRef) => {
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
        // BpmnPropertiesPanelModule, // 右侧属性栏这个框
        // BpmnPropertiesProviderModule, // 右侧属性栏里的内容
        // 小地图
        MinimapModule,
        // 网格线
        // GridLineModule,
        // 网格背景
        GridModule,
        // 自定义工具栏
        // CustomPaletteModule
      ],
      // gridLine: {
      //   smallGridSpacing: 10,
      //   gridSpacing: 50,
      //   gridLineStroke: 0.2,
      //   gridLineOpacity: 1,
      //   gridLineColor: '#ccc'
      // },
      minimap: {
        open: true,
        // size: {
        //   width: 120,
        //   height: 80
        // },
        canvas: {
          width: 120,
          height: 80
        }
      },
      moddleExtensions: {
        camunda: CamundaModdleDescriptor
      }
    });
    return bpmnModeler
  };
  return {
    init
  };
}