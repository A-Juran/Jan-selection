<template>
  <el-button icon="Refresh" circle />
  <el-button icon="Search" circle />
  <el-button icon="FullScreen" circle />
  <el-button icon="Setting" circle />
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-image
        style="width: 32px; height: 32px"
        src="http://q1.qlogo.cn/g?b=qq&nk=21171326&s=640"
      />
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
