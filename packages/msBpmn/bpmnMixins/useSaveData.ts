
export const useSaveData = () => {
  const saveBpmnWithSVG = (bpmnModeler) => {
    // 保存svg信息
    bpmnModeler.saveSVG().then(svg => {
      console.log('svg', svg)
    })

  };
  const saveBpmnWithXML = (bpmnModeler) => {
    // 保存xml信息
    bpmnModeler.saveXML().then(xml => {
      console.log('xml', xml)
    })
  };

  return {
    saveBpmnWithSVG,
    saveBpmnWithXML
  };
}