<template>
  <div class="login-page">
    <div class="login-content">
      <div style="font-size: 36px; font-weight: 700; color: #ffffff">
        Chào mừng đến với dự án E-learning
      </div>
      <a-image :width="500" src="/images/login.png " :preview="false" />
    </div>
    <div class="login-card">
      <a-flex :vertical="true" align="center" gap="large">
        <UserOutlined style="font-size: 32px; color: #4b89dc" />
        <div style="font-size: 32px">Đăng Nhập</div>
      </a-flex>
      <a-form :model="loginData" class="login-form">
        <a-form-item
          name="email"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-flex :vertical="true" gap="middle">
            <label style="font-size: 18px">Email: </label>
            <a-input v-model:value="loginData.email" />
          </a-flex>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-flex :vertical="true" gap="middle">
            <label style="font-size: 18px">Password: </label>
            <a-input-password v-model:value="loginData.password" />
          </a-flex>
        </a-form-item>

        <a-button type="primary" html-type="submit" @click="onSubmit"
          >Đăng Nhập</a-button
        >
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COURSE_ID } from '~/constants/course'

definePageMeta({
  layout: 'unlogin',
})

interface loginFormType {
  email: string
  password: string
}

const loginData = reactive<loginFormType>({
  email: '',
  password: '',
})

const userStore = useUserStore()
const { startLoading, finishLoading } = useLoading()

async function onSubmit() {
  if (!loginData.email || !loginData.password) {
    message.error('Vui lòng nhập đầy đủ thông tin')
    return
  }
  try {
    startLoading()
    await userStore.login(loginData)
    await userStore.fetchProfile()
    finishLoading()
  } catch (error) {
    finishLoading()
    throw error
  }
  useRouter().push(`/course/${COURSE_ID}/map`)
}
</script>

<style lang="scss" scoped>
.login-page {
  background-color: #4b89dc;
  height: 91vh;
  width: 100vw;
  padding: 35px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}

.login-card {
  width: 45%;
  height: 100%;
  background-color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
}

.login-form {
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0% 10%;
  margin-top: 10%;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
