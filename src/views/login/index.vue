<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="login-box">
        <el-form
          :rules="rules"
          :model="loginFormObject"
          ref="loginFormref"
          class="login-form"
        >
          <h1>Hello</h1>
          <h2>欢迎使用Vue-Admin</h2>
          <el-form-item prop="username">
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginFormObject.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginFormObject.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="login-button"
              @click="submitForm(loginFormref)"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { yiYan, timeSharingReminder } from '@/utils/welcation'
//data type
import type { loginFormData } from '@/api/user/type'
import type { FormRules, FormInstance } from 'element-plus'
//定义对象
let $router = useRouter()
let $route = useRoute()
let userStore = useUserStore()
//收集账号与密码的数据
let loginFormObject = reactive<loginFormData>({ username: '', password: '' })
//表单校验||提交
const loginFormref = ref<FormInstance>()
const rules = reactive<FormRules<loginFormData>>({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 4, max: 16, message: 'Length should be 4 to 6', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, max: 16, message: 'Length should be 6 to 16', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login()
    } else {
      let formAttr = Object.keys(fields)[0]
      if (formAttr) {
        ElNotification({
          type: 'info',
          message:
            fields[Object.keys(fields)[0]][0].field +
            ' ' +
            fields[Object.keys(fields)[0]][0].message,
        })
      }
    }
  })
}

// 按钮加载效果
let loading = ref(false)
//登录
const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginFormObject)
    ElNotification({
      message: '登录成功',
      type: 'success',
      title: `Hi,${timeSharingReminder()} 欢迎回来`,
    })
    //获取跳转地址
    let redirectUrl = $route.query.redirect
    $router.push({ path: (redirectUrl || '') as string })
  } catch (error) {
    ElNotification({
      message: (error as Error).message,
      type: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login-box {
    position: relative;
    height: 100vh;
    .login-form {
      width: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      background: url('@/assets/images/login_form.png') no-repeat;
      background-size: cover;
      padding: 30px 25px;
      box-sizing: border-box;
      border-radius: 8px;
      text-align: center;
      transition: all 0.5s;
      h1,
      h2 {
        color: white;
      }
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 20px;
        margin: 20px 0px;
      }
      .login-button {
        width: 100%;
      }
    }
  }
}
</style>
