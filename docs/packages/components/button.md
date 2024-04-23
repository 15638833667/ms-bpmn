# 按钮 button

<br/>

*按钮用于开始一个即时操作*

## 何时使用

- 当需要添加一个操作按钮时

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
</script>

## 基本使用

*七种类型*

<br/>

<div>
  <button>Default button</button>
  <button effect="reverse">Reverse button</button>
  <button type="primary">Primary button</button>
  <button type="danger">Danger button</button>
  <button type="dashed">Dashed button</button>
  <button type="text">Text button</button>
  <button type="link">Link button</button>
</div>

::: details Show Code

```vue
<template>
  <div>
    <button>Default button</button>
    <button effect="reverse">Reverse button</button>
    <button type="primary">Primary button</button>
    <button type="danger">Danger button</button>
    <button type="dashed">Dashed button</button>
    <button type="text">Text button</button>
    <button type="link">Link button</button>
  </div>
</template>
```

:::
## 禁用

<div>
  <button disabled>Default button</button>
  <button disabled effect="reverse">Reverse button</button>
  <button disabled type="primary">Primary button</button>
  <button disabled type="danger">Danger button</button>
  <button disabled type="dashed">Dashed button</button>
  <button disabled type="text">Text button</button>
  <button disabled type="link">Link button</button>
</div>

::: details Show Code

```vue
<template>
  <div>
    <button disabled>Default button</button>
    <button disabled effect="reverse">Reverse button</button>
    <button disabled type="primary">Primary button</button>
    <button disabled type="danger">Danger button</button>
    <button disabled type="dashed">Dashed button</button>
    <button disabled type="text">Text button</button>
    <button disabled type="link">Link button</button>
  </div>
</template>
```

:::

## 三种尺寸

<div>
  <button size="small">Small</button>
  <button>Default</button>
  <button size="large">Large</button>
</div>

::: details Show Code

```vue
<template>
  <div>
    <button size="small">Small</button>
    <button>Default</button>
    <button size="large">Large</button>
  </div>
</template>
```

:::

## 自定义样式

<button style="width: 120px; height: 40px;" size="large">
  <p style="font-size: 18px;">自定义样式</p>
</button>

::: details Show Code

```vue
<script setup lang="ts">
function onClick (e: Event) {
  console.log('click')
}
</script>
<template>
  <button style="width: 120px; height: 40px;" size="large">
    <p style="font-size: 18px;">自定义样式</p>
  </button>
</template>
```

:::

## 加载中状态

<div>
  <button :loading="loading">Default button</button>
  <button effect="reverse" :loading="loading">Reverse button</button>
  <button type="primary" :loading="loading">Primary button</button>
  <button type="danger" :loading="loading">Danger button</button>
  <button type="dashed" :loading="loading">Dashed button</button>
  <button type="text" :loading="loading">Text button</button>
  <button type="link" :loading="loading">Link button</button>
</div>
<br/>
<div  style="margin-top: 10px;">
  <h3 style="margin-top: 0;">Loading state: </h3>
  <button @click="loading = !loading">切换状态</button>
</div>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
</script>
<template>
  <div>
    <button :loading="loading">Default button</button>
    <button effect="reverse" :loading="loading">Reverse button</button>
    <button type="primary" :loading="loading">Primary button</button>
    <button type="danger" :loading="loading">Danger button</button>
    <button type="dashed" :loading="loading">Dashed button</button>
    <button type="text" :loading="loading">Text button</button>
    <button type="link" :loading="loading">Link button</button>
  </div>
  <br/>
  <div align="center" style="margin-top: 10px;">
    <h3 style="margin-top: 0;">Loading state: </h3>
    <Switch v-model:checked="loading" />
  </div>
</template>
```

:::

## 居中展示

<button center>Default button</button>

::: details Show Code

```vue
<template>
  <button center>Default button</button>
</template>
```

:::
## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
name | 按钮文本 | string &#124; slot | '按钮' | false
type | 按钮类型 | 'default' &#124; 'primary' &#124; 'danger' &#124; 'dashed' &#124; 'text' &#124; 'link' | 'default' | false
effect | 悬浮变化效果，只有 `type` 为 `default` 时，`effect` 才生效 | 'fade' &#124; 'reverse' | 'fade' | false
size | 按钮尺寸 | 'small' &#124; 'middle' &#124; 'large' | 'middle' | false
route | 跳转目标 `URL` 地址 | {path?: string&#44; query?: object} | {} | false
target | 如何打开目标URL，设置 `route` 时生效 | '_self' &#124; '_blank' | '_self' | false
disabled | 是否禁用 | boolean | false | false
loading | 是否加载中 | boolean | false | false
center | 是否将按钮宽度调整为其父宽度并居中展示 | boolean | false | false

## Events

事件名称 | 说明 | 参数
-- | -- | --
click | 点击按钮时的回调，未设置 `route` 时生效 | (e: Event) => void
