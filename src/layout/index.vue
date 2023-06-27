<template>
  <div class="layout_contianer">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Logo></Logo>
          <!-- 根据路由动态生成菜单。 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部菜单 -->
    <div class="layout_tabbar">1</div>
    <!-- 内容展示 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import useUserStore from '../store/modules/user'
let userStore = useUserStore()
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
      .el-menu {
        border-right: none;
      }
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
