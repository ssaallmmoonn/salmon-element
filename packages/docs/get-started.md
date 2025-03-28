---
search: true
next:
  link: /components/button
  text: Button 按钮
---

# Vue3 + TS 高仿 ElementPlus 打造个人组件库

## 安装

```bash
npm i @salmon-element --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import YisUI from 'salmon-element';
// 引入样式
import 'salmon-element/dist/index.css';

import App from './App.vue';
// 全局使用
createApp(App).use(YisElement).mount('#app');
```

```vue
<template>
	<yis-button>我是 Button</yis-button>
</template>
```

**单个导入**

Salmon-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
	<yis-button>我是 Button</yis-button>
</template>
<script>
import { YisButton } from ' salmon-element';
export default {
	components: { YisButton },
};
</script>
```

## 亮点

::: details

- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
  :::
