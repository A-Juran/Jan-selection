<template>
  <el-button icon="Refresh" @click="updateRefsh" circle />
  <el-button icon="Search" circle />
  <el-button icon="FullScreen" circle @click="fullScreen" />
  <el-button icon="Setting" circle />
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-image style="width: 32px; height: 32px" :src="userStore.loginUserInfo.avatar" />
      {{ userStore.loginUserInfo.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
//创建对象变量
let settingStore = useSettingStore()
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()
//局部刷新
const updateRefsh = () => {
  settingStore.refsh = !settingStore.refsh
}
//全屏
const fullScreen = () => {
  //根据Dom对象属性，判断当前是否为全屏模式
  let full = document.fullscreenElement
  if (!full) {
    //文档根节点的方法requestFullScreen，实现全屏
    document.documentElement.requestFullscreen()
  } else {
    //通过document对象属性exitFullScreen,退出全屏
    document.exitFullscreen()
  }
}
//退出
const loginOut = async () => {
  //向服务端请求退出
  //清除本地Token||UserInfo
  try {
    await userStore.userLoginOut();
    ElMessage({
      type: 'success',
      message: '退出成功'
    })
    //跳转登录页
  } catch (error) {
    ElMessage({
      type: 'error',
      message: '退出失败'
    })
  }
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
