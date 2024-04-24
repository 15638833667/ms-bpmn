# 快速上手


## 安装

::: code-group

```sh [npm]
$ npm add vue3-component-template
```

```sh [pnpm]
$ pnpm add vue3-component-template
```

```sh [yarn]
$ yarn add vue3-component-template
```

```sh [bun]
$ bun add vue3-component-template
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import vue3ComponentTemplate from 'vue3-component-template'
import 'vue3-component-template/css'

const app = createApp(App)
app.use(vue3ComponentTemplate)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'vue3-component-template'
import 'vue3-component-template/css'
</script>

<template>
  <Button></Button>
</template>
```
