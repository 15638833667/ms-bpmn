import { defineComponent, ref, inject } from 'vue'

const Scales = defineComponent({
  name: 'Scales',
  setup() {

    const bpmnModeler = inject('bpmnModeler', null)
    console.log('scales', bpmnModeler)
    const canvas = bpmnModeler.get('canvas')
    console.log('canvas', canvas)
    const currentScale = ref(canvas.zoom())
    const setZoom = (newScale: number | string) => {
      canvas && canvas.zoom(newScale, newScale === 'fit-viewport' ? 'auto auto' : 'auto auto')
    }
    const zoomReset = (newScale?: number | string) => {
      currentScale.value = newScale || 1
      setZoom('fit-viewport')
    }

    const zoomOut = (newScale?: number) => {
      currentScale.value = newScale || Math.floor(currentScale.value * 100 - 0.1 * 100) / 100
      setZoom(currentScale.value)
    }

    const zoomIn = (newScale?: number) => {
      currentScale.value = newScale || Math.floor(currentScale.value * 100 + 0.1 * 100) / 100
      setZoom(currentScale.value)
    }

    return () => (
      <el-button-group>
        <el-button ref="buttonRef" onClick={() => zoomOut()} title="缩小">
          <el-icon><zoom-out /></el-icon>
        </el-button>
        <el-button onClick={() => zoomReset()} title="重置">
          <span style="text-align: center; display: inline-block; width: 40px">
            {Math.floor(currentScale.value * 10) * 10 + '%'}
          </span>
        </el-button>
        <el-button onClick={() => zoomIn()} title="放大">
          <el-icon><zoom-in /></el-icon>
        </el-button>
      </el-button-group>
    )
  }
})

export default Scales
