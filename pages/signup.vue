<template>
  <div class='login-page'>
    <div class='login-content'>
      <div style='font-size: 36px; font-weight: 700;color: #FFFFFF'>Chào mừng đến với dự án E-learning</div>
      <a-image
        :width='500'
        src='/images/login.png '
        :preview='false'
      />
    </div>
    <div class='login-card'>
      <a-flex :vertical='true' align='center' gap='small'>
        <UserOutlined style='font-size: 32px; color: #4B89DC' />
        <div style='font-size: 32px'>Đăng Ký</div>
      </a-flex>
      <a-form :model='signUpData'
              class='login-form'>
        <a-form-item v-for='item in formSignUp'
                     :name='item.name'
                     :rules='(item.name==="cfPassword")?[{ validator: validatePass2, trigger: "change" }]:[{ required: true, message: item.message }]'
        >
          <a-flex align='center' justify='space-between'>
            <label>{{ item.label + ':' }}</label>
            <a-input-password v-if="item.name==='password'||item.name==='cfPassword'"
                              v-model:value='signUpData[item.name]' style='width: 60%' />
            <a-input v-else v-model:value='signUpData[item.name]' style='width: 60%' />
          </a-flex>
        </a-form-item>

        <a-button type='primary' html-type='submit' @click='onSubmit'>Đăng ký</a-button>
      </a-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
definePageMeta({
  layout: 'unlogin',
})
import type { Rule } from 'ant-design-vue/es/form'

interface SignUpDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cfPassword: string;
}

const signUpData = reactive<SignUpDataType>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cfPassword: '',
})

const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value !== signUpData.password) {
    return Promise.reject('Two password don\'t match!')
  } else {
    return Promise.resolve()
  }

}

interface formSignUp {
  name: string,
  label: string,
  message: string
}

const formSignUp: formSignUp[] = [
  {
    name: 'firstName',
    label: 'First name',
    message: 'Please input your First name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    message: 'Please input your Last name',
  },
  {
    name: 'email',
    label: 'Email address',
    message: 'Please input your email',
  },
  {
    name: 'password',
    label: 'Password',
    message: 'Please input your password',
  },
  {
    name: 'cfPassword',
    label: 'Confirm Password',
    message: 'Two password don\'t match!',
  },
]

async function onSubmit() {
  if (!signUpData.firstName || !signUpData.lastName || !signUpData.email || !signUpData.password) {
    message.error('Vui lòng nhập đầy đủ thông tin')
    return
  }
  const userInfor = {
    firstName: signUpData.firstName,
    lastName: signUpData.lastName,
    email: signUpData.email,
    password: signUpData.password,
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
  padding: 0 10% 10% 10%;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%
}
</style>
