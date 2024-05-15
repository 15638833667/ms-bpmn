# ms-bpmn-js

*该组件库采用 `Vue@3.4.19`+ `TypeScript@5.3.3` + `Vite@5.1.4` + `Less@4.2.0` 实现！*<br/>
*所有组件样式 `CSS` 均使用 `box-sizing: border-box;` 模式！*<br/>
*开箱即用！*


## Install & Use

```bash
pnpm i ms-bpmn-js
# or
npm install ms-bpmn-js
# or
yarn add ms-bpmn-js
```

Import and register component

**Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import MsBpmnJs from 'ms-bpmn-js'
import 'ms-bpmn-js/css'

const app = createApp(App)
app.use(MsBpmnJs)
```

**Local**

```vue
<script setup lang="ts">
import { Button } from 'ms-bpmn-js'
import 'ms-bpmn-js/css'
</script>
```


## 依赖

Component name | Descriptions
:-- | :-- | :-- | :--
[@bpmn-io/add-exporter](https://github.com/bpmn-io/add-exporter) | 插入您喜欢的 BPMN、DMN 和 CMMN 编辑器，并将 和元数据添加到保存的图表中。
[@bpmn-io/element-template-chooser](https://github.com/bpmn-io/element-template-chooser) | 一个简单的元素模板选择器。
[@bpmn-io/properties-panel](https://github.com/bpmn-io/properties-panel) | 用于创建 bpmn-io 属性面板的库。
[bpmn-js-bpmnlint](https://github.com/bpmn-io/bpmn-js-bpmnlint) | 基于bpmn-js的流程设计器校验实现
[bpmn-js-color-picker](https://github.com/bpmn-io/bpmn-js-color-picker) | 此 bpmn-js 扩展将一个简单的颜色选择器添加到元素上下文垫中。颜色根据 BPMN in Color 提案序列化到 BPMN 2.0。
[bpmn-js-connectors-extension](https://github.com/bpmn-io/bpmn-js-connectors-extension) | bpmn-js-连接器扩展
[bpmn-js-external-label-modeling](https://github.com/miyuesc/bpmn-js-external-label-modeling) | 一个用来将Label标签渲染在节点外部的bpmn-js插件。
[bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel) | bpmn-js 的属性面板扩展，添加了编辑技术属性（generic 和 Camunda）的功能。
[bpmn-js-token-simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) | 符合 BPMN 2.0 规范的令牌模拟器，作为 bpmn-js 扩展构建。
[bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) | 在 NodeJS 和浏览器中读取和写入 BPMN 2.0 逻辑示意图文件。
[bpmnlint](https://github.com/bpmn-io/bpmnlint) | 根据可配置的 lint 规则验证 BPMN 图。
[camunda-bpmn-moddle](https://github.com/camunda/camunda-bpmn-moddle) | 该项目将 BPMN 2.0 的 Camunda 命名空间扩展定义为 moddle 描述符。
[diagram-js](https://github.com/bpmn-io/diagram-js) | 用于在 Web 上显示和修改图表的工具箱。
[diagram-js-grid-bg](https://github.com/miyuesc/diagram-js-grid-bg) | diagram-js 的可视化网格背景，基于 diagram-js-grid。
[diagram-js-minimap](https://github.com/bpmn-io/diagram-js-minimap) | diagram-js 的小地图。
























