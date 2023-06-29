<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加按钮 -->
      <el-button type="primary" icon="Plus">添加品牌</el-button>
      <!-- 表格组件，展示已有得 -->
      <el-table border :data="records" style="margin: 0.625rem 0">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="tmName" label="品牌名称" />
        <el-table-column prop="logoUrl" label="品牌Logo">
          <template #default="{ row, index }">
            <el-image style="width: 50px; height: 50px; border-radius: 50%"
              :src="logoUrlMakeUP(row.logoUrl, 0, 'http://')" fit="cover" />
          </template>
        </el-table-column>
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
        <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[5, 10, 15, 20]" background
          layout=" prev, pager, next, jumper,->,sizes,total" :total="total" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
//引入函数
import { ref, onMounted, watch } from 'vue'
import { getTradeMarkInfo } from '@/api/product/trademark'
import {
  TradeMarkResponseDataType,
  Records,
} from '@/api/product/trademark/type'
//定义变量
let pageNo = ref<number>(1)
let limit = ref<number>(5)
let total = ref<number>(0)
let records = ref<Records>([])
//获取品牌数据函数
const getHasTradeMarkInfo = async () => {
  let result: TradeMarkResponseDataType = await getTradeMarkInfo(
    pageNo.value,
    limit.value,
  )
  if (result.code === 200) {
    total.value = result.data.total
    records.value = result.data.records
  }
}
//组件挂载完毕钩子
onMounted(() => {
  getHasTradeMarkInfo()
})

const logoUrlMakeUP = (url: string, pos: number, str: string) => {
  if (!urlContainHttpStr(url)) return insertStr(url, pos, str)
  return url
}

//为字符串插入字符 其中soure为原字符串,start为将要插入字符的位置，newStr为要插入的字符
const insertStr = (soure: string, start: number, newStr: string) => {
  return soure.slice(0, start) + newStr + soure.slice(start)
}

//检测是否出现http
const urlContainHttpStr = (str: string) => {
  const regex = /(http|https):\/\/\S*/g
  const v = str.match(regex)
  return v ? true : false
}

/**
 * size-change、current-change
 * WARNING
 * 以上事件不推荐使用（但由于兼容的原因仍然支持，在以后的版本中将会被删除）；如果要监听 current-page 和 page-size 的改变，使用 v-model 双向绑定是个更好的选择,所以在数据分页时我们采用watch监听数据变化做到翻页效果
 * ----------------------------------------
 */
//分页器出发函数。
//对于当前也没发生变化自定义事件，组件pagination 父组件回传了数据。
const handleCurrentChange = (val: number) => {
  //当页码发生变化时再次发送请求获取对应已有品牌得数据展示。
  pageNo.value = val
  getHasTradeMarkInfo()
}

//当下拉菜单发生变化时触发方法。
//自定义事件，分页器组件会将下拉菜单数据返回。
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  limit.value = val
  getHasTradeMarkInfo()
}
//数据翻页
watch(pageNo, (newVal) => {
  getHasTradeMarkInfo()
})

watch(limit, (newVal) => {
  pageNo.value = 1;
  getHasTradeMarkInfo()
})
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
