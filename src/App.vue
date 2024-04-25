<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const theme = ref({
  token: {
    colorPrimary: '#00b96b'
  }
})
const route = useRoute()
const routeName = computed(() => {
  return route.name
})
</script>
<template>
  <h3>{{ routeName  }}</h3>
</template>
