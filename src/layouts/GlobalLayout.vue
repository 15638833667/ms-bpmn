
<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
<script setup lang="ts">


</script>
<style lang="scss" scoped>
</style>
