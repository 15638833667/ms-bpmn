

import useSaveData from './useSaveData' // 保存数据
const { saveBpmnWithSVG, saveBpmnWithXML } = useSaveData()
export default function useBpmnListener() {
  // 添加绑定事件

  const addBpmnListener = (bpmnModeler) => {
    // 给图绑定事件，当图有发生改变就会触发这个事件
    bpmnModeler.on('commandStack.changed', (event) => {
      saveBpmnWithSVG(bpmnModeler)
      saveBpmnWithXML(bpmnModeler)
    })
  }
  const addModelerListener = (bpmnModeler) => {
    // 'shape.removed'
    const events = ['shape.added', 'shape.move.end', 'connect.end', 'connection.create', 'connection.move', 'element.click', 'element.changed', 'element.updateLabel']

    const eventBus = bpmnModeler.get('eventBus')
    events.forEach(function(eventType) {
      eventBus.on(eventType, e => {
        console.log(eventType, e)
        if (!e || e.element?.type == 'bpmn:Process') return
        if (eventType === 'element.changed') {
          // that.elementChanged(e)
        } else if (eventType === 'element.click') {
          console.log('点击了element', e)
          // if (e.element.type === 'bpmn:Task') {
          // }
        } else if (eventType === 'element.updateLabel') {
          console.log('element.updateLabel', e.element)
        }
        const elementRegistry = bpmnModeler.get('elementRegistry')
        const shape = e.element ? elementRegistry.get(e.element.id) : e.shape
        console.log('shape', shape)
      })
    })
  }
  return {
    addBpmnListener,
    addModelerListener
  };
}