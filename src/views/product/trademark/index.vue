<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加按钮 -->
      <el-button type="primary" icon="Plus">添加品牌</el-button>
      <!-- 表格组件，展示已有得 -->
      <el-table border style="margin: .625rem 0;">
        <el-table-column prop="" label="序号" />
        <el-table-column prop="" label="品牌名称" />
        <el-table-column prop="" label="品牌Logo" />
        <el-table-column prop="" label="品牌操作">
          <template #default="scope">
            <el-button size="small">Edit</el-button>
            <el-button size="small" type="danger">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 
        分页组件
        layout中->将组件顶到最右侧
      -->
      <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
          :small="small" :disabled="disabled" :background="background" layout=" prev, pager, next, jumper,->,sizes,total"
          :total="400" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(1)
const pageSize = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
