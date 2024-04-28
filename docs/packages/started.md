# 快速上手


## 安装

::: code-group

```sh [npm]
$ npm add ms-bpmn-js
```

```sh [pnpm]
$ pnpm add ms-bpmn-js
```

```sh [yarn]
$ yarn add ms-bpmn-js
```

```sh [bun]
$ bun add ms-bpmn-js
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import MsBpmnJs from 'ms-bpmn-js'
import 'ms-bpmn-js/css'

const app = createApp(App)
app.use(MsBpmnJs)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'ms-bpmn-js'
import 'ms-bpmn-js/css'
</script>

<template>
  <Button></Button>
</template>
```
