<h1 align="center">
Ant Design Icons for Vue
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@buianhthang/icons-vue.svg?style=flat)](https://npmjs.org/package/@buianhthang/icons-vue)
[![NPM downloads](http://img.shields.io/npm/dm/@buianhthang/icons-vue.svg?style=flat)](https://npmjs.org/package/@buianhthang/icons-vue)

</div>

## Install

```bash
yarn add @buianhthang/icons-vue
```

## Basic Usage

First, you should add the icons that you need into the library.

```js
import Vue from 'vue'
import { Filter } from '@buianhthang/icons-vue';
Vue.component(Filter.name, Filter);
```

After that, you can use antd icons in your Vue components as simply as this:

```jsx
<icon-filter />
```

## Build project

```bash
npm run generate # Generate files to ./src
npm run compile # Build library
npm run test # Runing Test
```
