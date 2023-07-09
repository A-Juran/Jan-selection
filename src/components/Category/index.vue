<template>
  <el-card class="box-card">
    <el-form inline>
      <el-form-item label="一级分类">
        <el-select
          v-model="categoryStore.selectTopCategory"
          @change="getSecondClass"
          class="m-2"
          placeholder="请选择"
          size="large"
        >
          <el-option
            v-for="item in categoryStore.topCategory"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          v-model="categoryStore.selectSecondCategory"
          @change="getThreeClass"
          class="m-2"
          placeholder="请选择"
          size="large"
        >
          <el-option
            v-for="item in categoryStore.secondCategory"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          v-model="categoryStore.selectThreeCategory"
          class="m-2"
          placeholder="请选择"
          size="large"
        >
          <el-option
            v-for="c3 in categoryStore.threeCategory"
            :key="c3.id"
            :label="c3.name"
            :value="c3.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import useCategoryStore from '@/store/modules/category'
//对象赋值
let categoryStore = useCategoryStore()

//获取二级分类方法
const getTopaClass = async () => {
  //获取数据
  categoryStore.getTopClass()
}
//获取三级分类
const getSecondClass = async () => {
  //清除分类2、3id以及3的数组
  categoryStore.selectSecondCategory = ''
  categoryStore.selectThreeCategory = ''
  categoryStore.threeCategory = []
  //获取数据
  categoryStore.getSecondClass()
}
//三级分类
const getThreeClass = async () => {
  //清除分类3id以及3的数组
  categoryStore.selectThreeCategory = ''
  categoryStore.threeCategory = []
  //获取数据
  categoryStore.getThreeClass()
}
onMounted(() => {
  getTopaClass()
})
</script>

<script lang="ts">
export default {
  name: 'category',
}
</script>

<style scoped></style>
