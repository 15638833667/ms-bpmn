
import { useSaveData } from './useSaveData' // 保存数据
const { saveBpmnWithSVG, saveBpmnWithXML } = useSaveData()

export const useBpmnListener = () => {
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
    const events = ['shape.added', 'shape.move.end','shape.removed', 'connect.end']

    events.forEach(function(eventType) {
      bpmnModeler.on(eventType, e => {
        console.log(eventType, e)
        const elementRegistry = bpmnModeler.get('elementRegistry')
        const shape = e.element ? elementRegistry.get(e.element.id) : e.shape
        console.log('shape', shape)
      })
    })
  }
  const addEventBusListener = (bpmnModeler) => {
    // 'shape.removed'
    const events = ['element.click', 'element.changed', 'element.updateLabel']
    const modeling = bpmnModeler.get('modeling')
    const elementRegistry = bpmnModeler.get('elementRegistry');

    const eventBus = bpmnModeler.get('eventBus')
    events.forEach(function(eventType) {
      eventBus.on(eventType, e => {
        console.log(eventType, e)
        if (!e || !e.element) return
        if (eventType === 'element.changed') {
          // that.elementChanged(e)
        } else if (eventType === 'element.click') {
          const shape = e.element ? elementRegistry.get(e.element.id) : e.shape
          if (shape.type === 'bpmn:Task') {

            // modeling.updateProperties(shape, {
            //   name: '我是修改后的Task名称',
            //   isInterrupting: false,
            //   customText: '我是自定义的text属性'
            // })
          }
          console.log('点击了element', e)
        } else if (eventType === 'element.updateLabel') {
          console.log('element.updateLabel', e.element)
        }
      })
    })
  }
  const removeBpmnListener = (bpmnModeler) => {
    // 给图绑定事件，当图有发生改变就会触发这个事件
    bpmnModeler.off('commandStack.changed')
  }
  const removeModelerListener = (bpmnModeler) => {
    const events = ['shape.added', 'shape.move.end','shape.removed', 'connect.end']
    events.forEach(function(eventType) {
      bpmnModeler.off(eventType)
    })
  }
  const removeEventBusListener = (bpmnModeler) => {
    const events = ['element.click', 'element.changed', 'element.updateLabel']
    const eventBus = bpmnModeler.get('eventBus')
    events.forEach(function(eventType) {
      eventBus.off(eventType)
    })
  }
  return {
    addBpmnListener,
    addModelerListener,
    addEventBusListener,
    removeBpmnListener,
    removeModelerListener,
    removeEventBusListener
  };
}