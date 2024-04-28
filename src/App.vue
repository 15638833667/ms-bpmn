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
  <div class="app-item">
    
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
</style>
