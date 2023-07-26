<template>
  <div>
    <!-- 搜索 -->
    <el-card>
      <el-form :inline="true" class="form">
        <el-form-item label="用户名">
          <el-input>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 数据展示 -->
    <el-card style="margin-top: 12px;">
      <el-button @click="saveUserInfoDrawer">添加用户</el-button>
      <el-button>批量删除</el-button>
      <el-table border :data="userInfoList" style="margin-top: 12px;">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="#" type="index" align="center"></el-table-column>
        <el-table-column label="id" prop="id" align="center"></el-table-column>
        <el-table-column label="用户名字" prop="username" align="center"></el-table-column>
        <el-table-column label="用户昵称" prop="name" align="center"></el-table-column>
        <el-table-column label="用户角色" prop="roleName" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
        <el-table-column label="更新时间" prop="updateTime" align="center"></el-table-column>
        <el-table-column label="Action" align="center" width="400px">
          <template #default="scope">
            <el-button icon="User" type="primary">User</el-button>
            <el-button icon="Edit" type="primary" @click="updateUser(scope.row)">Edit</el-button>
            <el-button icon="Delete" type="primary">Remove</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 15, 20, 30]"
          small="small" layout="prev, pager, next, jumper,->,sizes,total" :total="totals" />
      </div>
    </el-card>
    <!-- 抽屉结构完成用户信息更新 -->
    <el-drawer v-model="drawer">
      <!-- header title。 -->
      <template #header>
        <h4>添加用户信息</h4>
      </template>
      <!-- drawer -->
      <template #default>
        <el-form>
          <el-form-item label="用户姓名">
            <el-input v-model="userParams.username"></el-input>
          </el-form-item>
          <el-form-item label="用户昵称">
            <el-input v-model="userParams.name"></el-input>
          </el-form-item>
          <el-form-item label="用户密码">
            <el-input v-model="userParams.password"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <!-- drawer footer -->
      <template #footer>
        <div style="flex: auto">
          <el-button @click="drawer  = false">取消</el-button>
          <el-button type="primary" @click="onSaveUserIinfo" :disabled="saveUserInfoButtonStatus">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
//引入组合式api
import { ref, onMounted, watch, reactive } from 'vue'
import type { UserInfoDT, userDTList, userDT } from '@/api/acl/user/type'
import { getUserInfo, saveUserInfo } from '@/api/acl/user'
import { ElMessage } from 'element-plus';
//声明响应式变量或对象。
let currentPage = ref<number>(1);
let pageSize = ref<number>(10);
let userInfoList = ref<userDTList>([])
let totals = ref<number>(0);
let drawer = ref<boolean>(false)
let saveUserInfoButtonStatus = ref<boolean>(false)
//收集用户响应信息
let userParams = reactive<userDT>({
  username: '',
  name: '',
  password: ''
})

let radio1 = ref<string>("");

//更新用户信息
const updateUser = (row: UserInfoDT) => {
  drawer.value = true;
}

//添加|更新用户信息
const onSaveUserIinfo = async () => {
  saveUserInfoButtonStatus.value = true;
  let res: any = await saveUserInfo(userParams);
  if (res.code === 200) {
    ElMessage.success(res.message);
    //成功后关闭抽屉栏。
    drawer.value = false;
    //更新数据信息
    getHasUser();
  } else {
    ElMessage.error(res.message);
    drawer.value = false;
  }
  saveUserInfoButtonStatus.value = false;
}
//添加用户drawer
const saveUserInfoDrawer = () => {
  //抽屉弹出
  drawer.value = true;
  //数据清空
  Object.assign(userParams, {
    username: '',
    name: '',
    password: ''
  })
}
//获取用户信息
const getHasUser = async () => {
  let res = await getUserInfo(currentPage.value, pageSize.value);
  if (res.code == 200) {
    userInfoList.value = res.data.records;
    totals.value = res.data.total;
  }
}
//加载获取用户信息
onMounted(async () => {
  getHasUser();
})

//根据上下页滚动获取数据
watch(currentPage, (v) => {
  getHasUser()
})

watch(pageSize, (v) => {
  currentPage.value = 1;
  getHasUser()
})
</script>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: space-between;
}

.pagination {
  margin-top: 0.75rem;
}
</style>
