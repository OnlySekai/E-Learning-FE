import { USER_ENDPOINT } from '~/constants/endpoint'
import type { LoginRequest } from './dto/login.request'
import type { UserStateEntity } from './entity/state'
import type { LoginResponse } from './dto/login.response'
import type { ProfileResponse } from './dto/profile.response'

export const useUserStore = defineStore('user', {
  state: (): UserStateEntity => ({
    users: [],
  }),
  actions: {
    async login(payload: LoginRequest) {
      const response = (await $api(USER_ENDPOINT.login.path, {
        method: USER_ENDPOINT.login.method,
        body: payload,
      })) as LoginResponse
      const { token } = response
      localStorage.setItem('token', token)
    },
    async fetchProfile() {
      const profile = (await $api(USER_ENDPOINT.profile.path, {
        method: USER_ENDPOINT.profile.method,
      })) as ProfileResponse
      const { iat, exp, ...userInfo } = profile
      this.$patch({ owner: userInfo, iat, exp })
    },
  },
})
