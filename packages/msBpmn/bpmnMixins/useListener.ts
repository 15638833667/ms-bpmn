
export const useBpmnListener = () => {
  // 添加绑定事件
  const addBpmnListener = (bpmnModeler, cb) => {
    // 给图绑定事件，当图有发生改变就会触发这个事件
    bpmnModeler.on('commandStack.changed', (event) => {
      cb(event)
    })
  }
  const addModelerListener = (bpmnModeler, cb) => {
    // 'shape.removed'
    const events = ['shape.added', 'shape.move.end','shape.removed', 'connect.end']

    events.forEach(function(eventType) {
      bpmnModeler.on(eventType, event => {
        cb(event, eventType)
      })
    })
  }
  const addElementListener = (bpmnModeler, cb) => {
    const events = ['element.click', 'element.changed', 'element.updateLabel'] //
    const eventBus = bpmnModeler.get('eventBus')
    events.forEach(function(eventType) {
      eventBus.on(eventType, event => {
        cb(event, eventType)
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
  const removeElementListener = (bpmnModeler) => {
    const events = ['element.click', 'element.changed', 'element.updateLabel']
    const eventBus = bpmnModeler.get('eventBus')
    events.forEach(function(eventType) {
      eventBus.off(eventType)
    })
  }
  return {
    addBpmnListener,
    addModelerListener,
    addElementListener,
    removeBpmnListener,
    removeModelerListener,
    removeElementListener
  };
}