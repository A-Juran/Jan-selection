<template>
  <div class="layout_contianer">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Logo></Logo>
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Data screen</el-menu-item>
          <el-sub-menu index="3">
            <template #title>Rights Management</template>
            <el-menu-item index="3-1">User Management</el-menu-item>
            <el-menu-item index="3-2">Role Management</el-menu-item>
            <el-menu-item index="3-3">Menu Management</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 右侧菜单 -->
    <div class="layout_tabbar">1</div>
    <!-- 内容展示 -->
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo'
</script>

<style scoped lang="scss">
.layout_contianer {
  width: 100%;
  height: 100vh;
  background-color: $defaultColor;
  position: relative;
  .layout_slider {
    width: $layout-slider-menu-width;
    height: $layout-slider-menu-height;
    background-color: $layout-slider-menu-back-color;
    box-sizing: border-box;
    .scrollbar {
      width: 100%;
      height: calc(
        100vh - #{$layout-slider-menu-logo-width-height} - #{$layout-slider-menu-item-height}
      );
    }
  }
  .layout_tabbar {
    position: absolute;
    width: calc(100% - #{$layout-slider-menu-width});
    height: $layout-tabbar-height;
    background-color: $layout-tabbar-back-color;
    top: 0;
    left: $layout-slider-menu-width;
    box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.3);
    z-index: 1;
    box-sizing: border-box;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - #{$layout-slider-menu-width});
    height: calc(100vh - #{$layout-tabbar-height});
    background-color: $layout-main-back-color;
    top: $layout-tabbar-height;
    left: $layout-slider-menu-width;
    padding: 1.25rem;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
