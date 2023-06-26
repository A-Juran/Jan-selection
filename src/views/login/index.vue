<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="login-box">
        <el-form class="login-form">
          <h1>Hello</h1>
          <h2>欢迎使用Vue-Admin</h2>
          <el-form-item>
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="login-button"
              @click="login"
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
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
let userStore = useUserStore()
//收集账号与密码的数据
let loginForm = reactive({ username: '', password: '' })
//控制按钮加载效果
let loading = ref(false)
//配置路由跳转
const routers = useRouter()

const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    ElNotification({
      message: '登录成功',
      type: 'success',
    })
    routers.push('/home')
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
      width: 40%;
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
