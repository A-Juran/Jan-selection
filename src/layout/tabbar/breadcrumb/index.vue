<template>
  <!-- 侧边栏开关 -->
  <el-icon @click="changeIcon">
    <component :is="isCollapse ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator=">" class="bread">
    <el-breadcrumb-item
      v-for="(v, index) in $route.matched"
      :key="index"
      v-show="v.meta.title"
      :to="{ path: v.path }"
    >
      {{ v.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
//collapse action
let isCollapse = ref(false)
let settingStore = useSettingStore()
let $route = useRoute()
const changeIcon = () => {
  isCollapse.value = !isCollapse.value
  settingStore.SET_IS_COLLPASE(isCollapse.value)
}
</script>

<script lang="ts">
export default {
  name: 'BreadCrumb',
}
</script>

<style scoped>
.el-breadcrumb__inner {
  display: flex;
}
</style>
