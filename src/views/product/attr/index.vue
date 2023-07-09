<template>
  <div>
    <Category></Category>
    <el-card class="box-card">
      <el-button icon="Plus" border type="primary" :disabled="!categoryStore.selectThreeCategory">
        添加属性
      </el-button>
      <el-table style="margin-top: 0.75rem" :data="attrValue">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column label="属性名称" prop="attrName"></el-table-column>
        <el-table-column label="属性值名称">
          <template #default="scope">
            <el-tag class="ml-2" type="success" v-for="(v, index) in scope.row.attrValueList" :key="v.id">{{
              v.valueName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createTime"></el-table-column>
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
import { watch, ref } from 'vue'
import Category from '@/components/Category/index.vue'
import useCategoryStore from '@/store/modules/category'
import { getCategoryAttrVale } from '@/api/product/attr'
import type { attrValueDTList, categorAttrValueDTList, categoryAttrResDT } from '@/api/product/attr/type'
import { ElMessage } from 'element-plus'
//声明变量赋值
let categoryStore = useCategoryStore()
//存储已经有的属性和值
let attrValue = ref<categorAttrValueDTList>([])
//获取存储的属性与值
const getAttrValueList = async () => {
  //从仓库中获取分类值
  let { selectTopCategory, selectSecondCategory, selectThreeCategory } = categoryStore;
  //当上级分类中没有选中时中断发送请求
  if (!selectTopCategory || !selectSecondCategory) {
    ElMessage.warning('请选择分类')
    return;
  }
  if (!selectThreeCategory) {
    return;
  }
  let res: categoryAttrResDT = await getCategoryAttrVale(selectTopCategory, selectSecondCategory, selectThreeCategory);
  if (res.code == 200) {
    attrValue.value = res.data
  }
}
// 当三级路由发生变化时进行对应请求
watch(() => categoryStore.selectThreeCategory, async () => {
  //清空上一次数据
  attrValue.value = [];
  getAttrValueList()
})
</script>

<style scoped lang="scss">
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

  .el-tag:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.box-card:not(:last-child) {
  margin-bottom: 15px;
}
</style>
