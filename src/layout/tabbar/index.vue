<template>
  <div class="tabbar_container">
    <div class="tabbar_left">
      <!-- 面包屑 -->
      <bread-crumb></bread-crumb>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style lang="scss">
.tabbar_container {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: $layout-tabbar-padding-top;
  .tabbar_left {
    display: flex;
    align-items: center;
    .bread {
      margin-left: 0.75rem;
    }
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    .el-image {
      border-radius: 50%;
      margin-left: 0.75rem;
    }
    .el-dropdown {
      .el-dropdown-link > * {
        vertical-align: middle;
      }
    }
  }
}
</style>
