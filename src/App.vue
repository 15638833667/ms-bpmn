<template>
  <div class="ms-bpmn-test-container">
    <!-- <ms-button>test</ms-button> -->
    <!-- <ms-icon iconName="AOC_a-yunyingleixing15x" /> -->
    <ms-bpmn v-if="showStatus"></ms-bpmn>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const showStatus = ref(true);
// setTimeout(() => {
//   console.log('test');
//   showStatus.value = false;
//   setTimeout(() => {
//     showStatus.value = true;
//   }, 3000);
// }, 3000);
</script>
<style lang="scss" scoped>
  .app-item {
    margin-bottom: 20px;
  }
  .ms-bpmn-test-container {
    width: 100%;
    height: 100vh;
  }
</style>
