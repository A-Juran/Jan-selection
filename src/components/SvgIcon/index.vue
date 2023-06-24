<template>
  <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:href执行用哪个图标，属性prefix为#icon-图标名字 -->
    <!-- use 标签可以使用fill填充图标颜色。 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
//接收父组件传递过来的参数。
defineProps({
  // xlink:href属性值前缀。
  prefix: {
    type: String,
    default: '#icon-',
  },
  //提供图标的名字
  name: {
    type: String,
    default: 'phone',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
