import { xmlStr } from '../mock/xmlStr' // 这里是直接引用了xml字符串
export const useGetData = () => {
  const createNewDiagram = (bpmnModeler) => {
    // 将字符串转换成图显示出来
    return bpmnModeler.importXML(xmlStr).then(result => {
      console.log('result', result);
      // 让图能自适应屏幕
      const canvas = bpmnModeler.get('canvas')
      canvas.zoom('fit-viewport')
    });
  };
  return {
    createNewDiagram
  };
}