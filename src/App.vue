<template>
  <div class="box">
    <el-button :icon="Plus">Default</el-button>
    <el-button type="success" :icon="Edit">编辑</el-button>
    <el-button type="danger" :icon="Delete">删除</el-button>
    <h1>{{ str }}</h1>
    <svg-icon name="start" width="32px" height="32px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { reqLogin } from '@/api/user'
const str = ref('I love You!')

//todo
onMounted(() => {
  // request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username: 'admin',
  //     password: '123456',
  //   },
  // })
  reqLogin({ username: 123, password: '123456' })
})
</script>

<style scoped lang="scss">
.box {
  h1 {
    font-size: 120px;
    color: $defaultColor;
    display: inline;
  }
}
</style>
