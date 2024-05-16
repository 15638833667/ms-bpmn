import { defineComponent, inject, h, resolveComponent } from 'vue'
import Selection from 'diagram-js/lib/features/selection/Selection'
import Modeling from 'bpmn-js/lib/features/modeling/Modeling.js'
import { ElMessage } from 'element-plus'

const Aligns = defineComponent({
  name: 'Aligns',
  setup() {
    const buttons: { name: string; key: string; icon: string }[] = [
      { name: '左对齐', key: 'left', icon: 'Back' },
      { name: '水平居中', key: 'center', icon: 'Switch' },
      { name: '右对齐', key: 'right', icon: 'Right' },
      { name: '上对齐', key: 'top', icon: 'Top' },
      { name: '垂直居中', key: 'middle', icon: 'Sort' },
      { name: '下对齐', key: 'bottom', icon: 'Bottom' }
    ]

    const bpmnModeler = inject('bpmnModeler', null)
    // console.log('scales', bpmnModeler)

    let modeling: Modeling | null = bpmnModeler.get('modeling')
    let selection: Selection | null = bpmnModeler.get('selection')
    let align: any = bpmnModeler.get('alignElements')

    const alignElements = (tag: string) => {
      if (modeling && selection) {
        const SelectedElements = selection.get()
        if (!SelectedElements || SelectedElements.length <= 1) {
          return ElMessage.warning('请按住 Shift 键选择多个元素对齐')
        }
        align.trigger(SelectedElements, tag)
      }
    }

    return () => (
      <el-button-group>
        {buttons.map((item) => {
          return (
            <el-button onClick={() => alignElements(item.key)} title={item.name}>
              <el-icon>
                {() => h(resolveComponent(item.icon))}
              </el-icon>
            </el-button>
          )
        })}
      </el-button-group>
    )
  }
})

export default Aligns
