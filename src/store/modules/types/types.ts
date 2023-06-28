import { RouteRecordRaw } from 'vue-router'
import type { userInfo } from '@/api/user'

export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  loginUserInfo: userInfo
}

export interface SettingState {
  isCollpase: boolean
  refsh: boolean
}
