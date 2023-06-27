<template>
  <!-- 侧边栏开关 -->
  <el-icon><ElementPlus /></el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts"></script>

<style scoped></style>
