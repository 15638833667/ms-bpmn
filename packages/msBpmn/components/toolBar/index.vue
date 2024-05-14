<template>
  <div class="ms-bpmn-toolbar toolbar">
    <Imports></Imports>
    <Exports></Exports>
    <Aligns></Aligns>
    <Scales></Scales>
    <Commands></Commands>
  </div>
</template>
  

<script setup lang="ts">

import Imports from './components/Imports'
import Exports from './components/Exports'
import Aligns from './components/Aligns'
import Scales from './components/Scales'
import Commands from './components/Commands'

import { inject } from 'vue'

const bpmnModeler = inject('bpmnModeler', null)
console.log('toolbar', bpmnModeler)

</script>
<style scoped lang="scss">
.ms-bpmn-toolbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
