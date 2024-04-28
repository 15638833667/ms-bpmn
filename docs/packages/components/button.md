# 按钮 ms-button

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
  <ms-button>Default</ms-button>
  <ms-button type="primary">Primary</ms-button>
  <ms-button type="success">Success</ms-button>
  <ms-button type="info">Info</ms-button>
  <ms-button type="warning">Warning</ms-button>
  <ms-button type="danger">Danger</ms-button>
</div>

::: details Show Code

```vue
<template>
  <div>
    <ms-button>Default</ms-button>
    <ms-button type="primary">Primary</ms-button>
    <ms-button type="success">Success</ms-button>
    <ms-button type="info">Info</ms-button>
    <ms-button type="warning">Warning</ms-button>
    <ms-button type="danger">Danger</ms-button>
  </div>
</template>
```

:::

## Button API

### Button Attributes

| Name              | Description                                                             | Type                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size              | button size                                                             | `'large'\| 'default'\| 'small'`                                          | —       |
| type              | button type                                                             | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'\| 'text'(delete)` | —       |
| plain             | determine whether it's a plain button                                   | -                                                                      | false   |
| text ^(2.2.0)     | determine whether it's a text button                                    | -                                                                      | false   |
| bg ^(2.2.0)       | determine whether the text button background color is always on         | -                                                                      | false   |
| link ^(2.2.1)     | determine whether it's a link button                                    | -                                                                      | false   |
| round             | determine whether it's a round button                                   | -                                                                      | false   |
| circle            | determine whether it's a circle button                                  | -                                                                      | false   |
| loading           | determine whether it's loading                                          | -                                                                      | false   |
| loading-icon      | customize loading icon component                                        |   -                                                        | Loading |
| disabled          | disable the button                                                      | -                                                                      | false   |
| icon              | icon component                                                          |   -                                                        | —       |
| autofocus         | same as native button's `autofocus`                                     | -                                                                      | false   |
| native-type       | same as native button's `type`                                          | `'button'\| 'submit'\| 'reset'`                                          | button  |
| auto-insert-space | automatically insert a space between two chinese characters             | -                                                                      | —       |
| color             | custom button color, automatically calculate `hover` and `active` color |                                                                        | —       |
| dark              | dark mode, which automatically converts `color` to dark mode colors     | -                                                                      | false   |
| tag ^(2.3.4)      | custom element tag                                                      |   -                                                        | button  |

### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

### Button Exposes

| Name           | Description          | Type                                                                                                           |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | button html element  | `Ref<HTMLButtonElement>`                                                                              |
| size           | button size          | `ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | button type          | `ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | button disabled      | `ComputedRef<boolean>`                                                                                |
| shouldAddSpace | whether adding space | `ComputedRef<boolean>`                                                                                |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type                                                           | Default |
| ---- | ------------------------------------------------ | -------------------------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | `'large'\| 'default'\| 'small'`                         | —       |
| type | control the type of buttons in this button-group | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |