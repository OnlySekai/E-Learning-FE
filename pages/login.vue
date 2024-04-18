<template>
  <a-card title="Default size card" style="width: 300px">
    <a-form>
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>  
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
const formState = reactive({
  username: '',
  password: '',
  remember: false
})
</script>

<style lang="scss" scoped>
body {
  background-color: $blue;
}
</style>
