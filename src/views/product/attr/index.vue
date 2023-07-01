<template>
  <div>
    <Category></Category>
    <el-card class="box-card">
      <el-button icon="Plus" border type="primary"
        :disabled="!categoryStore.selectThreeCategory">添加属性</el-button>
      <el-table style="margin-top: .75rem;">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column label="属性名称"></el-table-column>
        <el-table-column label="属性值名称"></el-table-column>
        <el-table-column label="创建时间"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small">Detail</el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Category from '@/components/Category/index.vue'
import useCategoryStore from '@/store/modules/category'
//生命变量赋值
let categoryStore = useCategoryStore();
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 100%;

  .class_box {
    display: flex;
    justify-content: start;

    .class_box_item:not(:last-child) {
      margin-right: 1.25rem;
    }
  }
}

.box-card:not(:last-child) {
  margin-bottom: 15px;
}
</style>
