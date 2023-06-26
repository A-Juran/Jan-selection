<template>
  <div class="logo" v-if="!setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  display: flex;
  align-items: center;
  height: $layout-slider-menu-item-height;
  justify-content: center;
  box-sizing: border-box;
  img {
    width: $layout-slider-menu-logo-width-height;
    height: $layout-slider-menu-logo-width-height;
  }
  p {
    color: $layout-slider-menu-logo-title-color;
    font-size: $layout-slider-menu-logo-title-fontSize;
    margin-left: 0.625rem;
  }
}
</style>
