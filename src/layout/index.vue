<template>
  <div class="layout_contianer">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: settingStore.GET_IS_COLLPASE }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          collapse-transition
          :collapse="settingStore.GET_IS_COLLPASE"
        >
          <!-- 根据路由动态生成菜单。 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部菜单 -->
    <div class="layout_tabbar" :class="{ fold: settingStore.GET_IS_COLLPASE }">
      <tab-bar></tab-bar>
    </div>
    <!-- 内容展示 -->
    <div class="layout_main" :class="{ fold: settingStore.GET_IS_COLLPASE }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
//相关组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import TabBar from './tabbar/index.vue'
import Main from './main/index.vue'
import useUserStore from '../store/modules/user'
import useSettingStore from '../store/modules/setting'
import { useRoute } from 'vue-router'
//相关小仓库
let userStore = useUserStore()
let settingStore = useSettingStore()
//获取相关配置
let $route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style scoped lang="scss">
.layout_contianer {
  width: 100%;
  height: 100vh;
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
    &.fold {
      width: $layout-slider-menu-collpase-width;
    }
    transition: all 0.5s ease-in-out;
  }
  .layout_tabbar {
    position: absolute;
    width: calc(100% - #{$layout-slider-menu-width});
    // height: $layout-tabbar-height;
    background-color: $layout-tabbar-back-color;
    top: 0;
    left: $layout-slider-menu-width;
    box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.3);
    z-index: 1;
    box-sizing: border-box;
    &.fold {
      width: calc(100vw - #{$layout-slider-menu-collpase-width});
      left: $layout-slider-menu-collpase-width;
    }
    transition: all 0.5s ease-in-out;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - #{$layout-slider-menu-width});
    height: calc(100vh - #{$layout-tabbar-height});
    background-color: $layout-main-back-color;
    top: $layout-tabbar-height;
    left: $layout-slider-menu-width;
    padding: $layout-main-padding;
    overflow: auto;
    box-sizing: border-box;
    &.fold {
      width: calc(100vw - #{$layout-slider-menu-collpase-width});
      left: $layout-slider-menu-collpase-width;
    }
    transition: all 0.5s ease-in-out;
  }
}
</style>
