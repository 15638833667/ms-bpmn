# 快速上手


## 安装

::: code-group

```sh [npm]
$ npm add ms-bpmn
```

```sh [pnpm]
$ pnpm add ms-bpmn
```

```sh [yarn]
$ yarn add ms-bpmn
```

```sh [bun]
$ bun add ms-bpmn
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import MsBpmnJs from 'ms-bpmn'
import 'ms-bpmn/css'

const app = createApp(App)
app.use(MsBpmnJs)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'ms-bpmn'
import 'ms-bpmn/css'
</script>

<template>
  <Button></Button>
</template>
```
