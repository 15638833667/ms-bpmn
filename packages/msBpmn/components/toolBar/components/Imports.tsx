import { defineComponent, ref, inject } from 'vue'


const Imports = defineComponent({
  name: 'Imports',
  setup() {
    const bpmnModeler = inject('bpmnModeler', null)
    // console.log('import', bpmnModeler)

    const importRef = ref<HTMLInputElement | null>(null)

    const openImportWindow = () => {
      importRef.value && importRef.value.click()
    }

    const changeImportFile = () => {
      if (importRef.value && importRef.value.files) {
        const file = importRef.value.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function () {
          const xmlStr = this.result
          bpmnModeler?.importXML(xmlStr as string)
        }
      }
    }

    return () => (
      <div class="import-action">
        <el-button type="primary" onClick={openImportWindow}>
          打开文件
        </el-button>
        <input
          type="file"
          ref={importRef}
          style="display: none"
          accept=".xml,.bpmn"
          onChange={changeImportFile}
        ></input>
      </div>
    )
  }
})

export default Imports
