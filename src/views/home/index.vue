<template>
  <div>
    <h1>我是一级路由。home</h1>
  </div>
</template>

<script setup lang="ts">
//引入组合式API函数之生命周期函数
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

onMounted(() => {
  userStore.getUserInfo()
})
</script>

<style scoped></style>
