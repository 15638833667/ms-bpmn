<template>
  <!-- <div class="app-item">
    <input v-model="name" placeholder="Enter your name" />
    <button @click="saveName">Save</button>
  </div>
  <div class="app-item">
    <label>Dark mode:</label>
    <input type="checkbox" v-model="isDark">
    <div :class="{ dark: isDark }">
      Content goes here...
    </div>
  </div>
  <div class="app-item">
    <div v-if="isSupported">
      <p>
        Current copied: <code>{{ text || 'none' }}</code>
      </p>
      <input v-model="input" type="text">
      <button @click="copy(input)">
        Copy
      </button>
    </div>
    <p v-else>
      Your browser does not support Clipboard API
    </p>
  </div> -->
  <div class="ms-bpmn-test-container">
    <ms-button>test</ms-button>
    <ms-bpmn></ms-bpmn>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage, useDark, useClipboard } from '@vueuse/core';

const name: any = useLocalStorage('name', '');

const saveName = (name) => {
  // 保存名字到本地存储
  name.value = name;
};
const isDark = useDark();

const input = ref('')

const { text, isSupported, copy } = useClipboard()

</script>
<style lang="scss" scoped>
  .app-item {
    margin-bottom: 20px;
  }
  .ms-bpmn-test-container {
    width: 1200px;
    height: 600px;
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
</style>
