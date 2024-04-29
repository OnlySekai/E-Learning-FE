<template>
  <div class='login-page'>
    <div class='login-content'>
      <div style='font-size: 36px; font-weight: 700;color: #FFFFFF'>Chào mừng đến với ...</div>
      <a-image
        :width='500'
        src='/images/login.png '
        :preview='false'
      />
    </div>
    <div class='login-card'>
      <a-flex :vertical='true' align='center' gap='large'>
        <UserOutlined style='font-size: 32px; color: #4B89DC' />
        <div style='font-size: 32px'>Đăng Nhập</div>
      </a-flex>
      <a-form :model='loginData' class='login-form'>
        <a-form-item
          label='Email'
          name='email'
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value='loginData.email' />
        </a-form-item>
        <a-form-item
          label='Password'
          name='password'
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value='loginData.password' />
        </a-form-item>

        <a-button type='primary' html-type='submit' @click='onSubmit'>Đăng Nhập</a-button>
      </a-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
definePageMeta({
  layout: 'login',
})

interface loginFormType {
  email: string;
  password: string;
}

const loginData = reactive<loginFormType>({
  email: '',
  password: '',
})

async function onSubmit() {
  if (!loginData.email || !loginData.password) {
    message.error('Vui lòng nhập đầy đủ thông tin')
    return
  }
  const userInfor = {
    email: loginData.email,
    password: loginData.password,
  }
  console.log(userInfor)
}
</script>

<style lang='scss' scoped>
.login-page {
  background-color: #4B89DC;
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
  display: flex;
  flex-direction: column;
  padding: 10%;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%
}

</style>
