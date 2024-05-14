import { defineComponent, inject } from 'vue'

const Commands = defineComponent({
  name: 'Commands',
  setup() {

    const bpmnModeler = inject('bpmnModeler', null)
    console.log('Commands', bpmnModeler)

    const command = bpmnModeler.get('commandStack')
    
    console.log('commandStack', command)
    // 撤销
    const undo = () => {
      command && command.canUndo() && command.undo()
    }
    // 恢复
    const redo = () => {
      command && command.canRedo() && command.redo()
    }
    // 清空
    const clear = () => {
      bpmnModeler && bpmnModeler.clear()
    }
    // 保存
    const save = () => {
      // 保存xml信息
      bpmnModeler.saveXML().then(xml => {
        console.log('xml', xml)
      })
    }
    // 打开/收起小地图
    const minimapToggle = () => {
      const minimap = bpmnModeler.get('minimap')
      
      minimap && minimap.toggle()
    }

    return () => (
      <el-button-group>
        <el-button onClick={undo} title="撤销">
          <el-icon><refresh-left /></el-icon>
        </el-button>
        <el-button onClick={redo} title="恢复">
          <el-icon><refresh-right /></el-icon>
        </el-button>
        <el-button onClick={clear} title="清空">
          <el-icon><brush /></el-icon>
        </el-button>
        <el-button onClick={minimapToggle} title="打开/收起小地图">
          <el-icon><map-location /></el-icon>
        </el-button>
        <el-button onClick={save} title="保存">
          <el-icon><printer /></el-icon>
        </el-button>
      </el-button-group>
    )
  }
})

export default Commands
