<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加按钮 -->
      <el-button type="primary" icon="Plus" @click="addTrademark">
        添加品牌
      </el-button>
      <!-- 表格组件，展示已有得 -->
      <el-table border :data="records" style="margin: 0.625rem 0">
        <el-table-column type="index" label="序号" align="center" />
        <el-table-column prop="tmName" label="品牌名称" />
        <el-table-column prop="logoUrl" label="品牌Logo">
          <template #default="{ row, index }">
            <el-image
              style="width: 50px; height: 50px; border-radius: 50%"
              :src="logoUrlMakeUP(row.logoUrl, 0, 'http://')"
              fit="cover"
            />
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column prop="updateTime" label="最后一次更新时间" />
        <el-table-column prop="" label="品牌操作" fixed="right">
          <template #default="{ row, $index }">
            <el-button
              size="small"
              link
              @click="($event) => updateTrademark(row)"
            >
              Edit
            </el-button>
            <el-popconfirm
              title="确认删除?"
              @confirm="($event) => delTrademark(row)"
            >
              <template #reference>
                <el-button link size="small" type="danger">Delete</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 
        分页组件
        layout中->将组件顶到最右侧
      -->
      <div class="demo-pagination-block">
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="limit"
          :page-sizes="[10, 15, 20]"
          background
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="total"
        />
      </div>
    </el-card>
    <!-- 
      对话框组件：在添加品牌与修改已有品牌的业务是使用结构
     -->
    <el-dialog
      v-model="dialogTableVisible"
      :title="trademarkInfoParams.id ? '修改品牌' : '添加品牌'"
      width="25%"
    >
      <el-form
        label-position="left"
        :model="trademarkInfoParams"
        :rules="formRules"
        ref="ruleFormRef"
      >
        <el-form-item prop="tmName">
          <el-input
            placeholder="品牌名称"
            autocomplete="off"
            v-model="trademarkInfoParams.tmName"
          />
        </el-form-item>
        <el-form-item
          class="preview_logo"
          label="(默认logo👉(上传可见自己logo、点击商品即展示商品logo))"
        >
          <!--  v-if="imgPreviewSwitch" -->
          <el-image
            style="width: 100px; height: 100px"
            :src="trademarkInfoParams.logoUrl"
            fit="cover"
          />
        </el-form-item>
        <el-form-item label-width="0" prop="logoUrl">
          <el-upload
            class="upload-demo"
            v-model="trademarkInfoParams.logoUrl"
            drag
            action="/api/admin/product/fileUpload"
            :before-upload="beforeAvatarUpload"
            :on-success="handleUploadFileSuccess"
            multiple
          >
            <el-icon class="el-icon--upload">
              <upload-filled />
            </el-icon>
            <div class="el-upload__text">
              Drop file here or
              <em>click to upload</em>
              trademark Img
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button @click="confirm(ruleFormRef)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//引入函数
import { ref, onMounted, watch, reactive, nextTick } from 'vue'
import {
  getTradeMarkInfo,
  saveOrUploadTradeMarkInfo,
  delTradeMark,
} from '@/api/product/trademark'
import {
  TradeMarkResponseDataType,
  Records,
  TradeMarkDataType,
} from '@/api/product/trademark/type'
import { ElMessage, FormInstance, FormRules, UploadProps } from 'element-plus'
//定义变量
let pageNo = ref<number>(1)
let limit = ref<number>(10)
let total = ref<number>(0)
let records = ref<Records>([])
let imgPreviewSwitch = ref<boolean>(false)
let dialogTableVisible = ref<boolean>(false)
let trademarkInfoParams = reactive<TradeMarkDataType>({
  id: undefined,
  tmName: '',
  logoUrl: '',
})
const ruleFormRef = ref<FormInstance>()
let formRules = reactive<FormRules<TradeMarkDataType>>({
  tmName: [
    { required: true, message: '必须输入商品名称', trigger: 'blur' },
    { min: 2, max: 8, message: '商品名称字符长度在2-8之间', trigger: 'blur' },
  ],
  logoUrl: [
    { required: true, message: '必须输入商品名称', trigger: 'blur' },
    { min: 8, message: '商品名称字符最小为8', trigger: 'blur' },
  ],
})
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
  pageNo.value = 1
  getHasTradeMarkInfo()
})
//添加品牌
const addTrademark = () => {
  dialogTableVisible.value = true
  imgPreviewSwitch.value = false
  trademarkInfoParams.id = undefined
  trademarkInfoParams.tmName = ''
  trademarkInfoParams.logoUrl = ''
  trademarkInfoParams.logoUrl = !trademarkInfoParams.logoUrl
    ? 'http://q1.qlogo.cn/g?b=qq&nk=21171326&s=640'
    : ''
  //规则清除
  //方式一、可选连接运算符 组件有才执行该方法
  //nextTick
  ruleFormRef.value?.clearValidate()
  nextTick(() => {
    ruleFormRef.value.clearValidate()
  })
}
//修改已有品牌按钮的回调
const updateTrademark = (v) => {
  dialogTableVisible.value = true
  imgPreviewSwitch.value = true
  ruleFormRef.value?.clearValidate()
  trademarkInfoParams.id = v.id
  trademarkInfoParams.tmName = v.tmName
  trademarkInfoParams.logoUrl = logoUrlMakeUP(v.logoUrl, 0, 'http://')
}
//删除已有品牌
const delTrademark = async (row) => {
  let res = await delTradeMark(row.id)
  if (res.code === 200) {
    ElMessage.success('删除成功')
    pageNo.value = records.value.length > 1 ? pageNo.value : pageNo.value - 1
  } else {
    ElMessage.error('删除失败')
  }
}
// 添加商品对话框操作
const cancel = () => {
  dialogTableVisible.value = false
}

const confirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let res: any = await saveOrUploadTradeMarkInfo(trademarkInfoParams)
      //添加成功
      if (res.code === 200) {
        dialogTableVisible.value = false
        ElMessage.success(
          trademarkInfoParams.id ? '更新商品信息成功' : '添加商品成功',
        )
        //进行数据请求，改变Pagination的数据变化
        getHasTradeMarkInfo()
        //收集数据清空
      } else {
        ElMessage.warning(
          trademarkInfoParams.id ? '更新商品信息失败' : '添加商品失败',
        )
      }
    } else {
      console.log(fields)
      ElMessage.error(fields[Object.keys(fields)[0]][0].message)
    }
  })
}

//上传图片 -> 上传图片之前触发的钩子函数。可约束文件大小对文件进行处理。
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (
    rawFile.type == 'image/png' ||
    rawFile.type == 'image/jpeg' ||
    rawFile.type == 'image/gif'
  ) {
    return true
  } else if (rawFile.size / 1024 / 1024 > 4) {
    ElMessage.error('Avatar picture size can not exceed 4MB!')
    return false
  }
  ElMessage.error('Avatar picture must be JPG|png|gif format!')
  return false
}
//上传成功
const handleUploadFileSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile,
) => {
  //将服务器返回数据收集
  trademarkInfoParams.logoUrl = response.data
}

// 自定义校验规则方法。
</script>

<style lang="scss">
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

.upload-demo {
  width: 100%;
}

.preview_logo {
  .el-form-item__content {
    justify-content: center !important;
  }

  img {
    border-radius: 50%;
  }
}
</style>
