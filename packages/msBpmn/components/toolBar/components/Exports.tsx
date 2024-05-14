import { defineComponent, inject } from 'vue'
import { downloadToFile, convertEncoded } from '../../utils/ExportBpmnData'

const Exports = defineComponent({
  name: 'Exports',
  setup() {
    const bpmnModeler = inject('bpmnModeler', null)
    console.log('import', bpmnModeler)
    
    // 下载流程图到本地
    /**
     * @param {string} type
     * @param {*} name
     */
    const downloadProcessFile = async (type: string, name = 'diagram') => {
      try {
        // 按需要类型创建文件并下载
        if (type === 'xml' || type === 'bpmn') {
          const { err, xml } = await bpmnModeler.saveXML()
          // 读取异常时抛出异常
          if (err) {
            console.error(`[Process Designer Warn ]: ${err.message || err}`)
          }
          const { href, filename } = convertEncoded(type.toUpperCase(), name, xml!)
          downloadToFile(href, filename)
        } else {
          const { err, svg } = await bpmnModeler.saveSVG()
          // 读取异常时抛出异常
          if (err) {
            return console.error(err)
          }
          const { href, filename } = convertEncoded('SVG', name, svg!)
          downloadToFile(href, filename)
        }
      } catch (e: any) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`)
      }
    }

    const downloadFileWithXml = () => {
      downloadProcessFile('xml')
    }
    const downloadFileWithBpmn = () => {
      downloadProcessFile('bpmn')
    }
    const downloadFileWithSvg = () => {
      downloadProcessFile('svg')
    }

    return () => (
      <div class="export-action">
        <el-popover
          popper-class="export-action-popover"
          placement="bottom"
          trigger="click"
          v-slots={{
            reference: () => <el-button type="primary">导出为...</el-button>,
            default: () => (
              <div class="export-actions-btn-list">
                <el-button type="primary" size="small" onClick={downloadFileWithBpmn}>
                  导出为Bpmn
                </el-button>
                <el-button type="primary" size="small" style={{ marginLeft: '0', marginTop: '10px' }} onClick={downloadFileWithXml}>
                  导出为XML
                </el-button>
                <el-button type="primary" size="small" style={{ marginLeft: '0', marginTop: '10px' }} onClick={downloadFileWithSvg}>
                  导出为SVG
                </el-button>
              </div>
            )
          }}
        ></el-popover>
      </div>
    )
  }
})

export default Exports
