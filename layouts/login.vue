<template>
  <a-layout class='layout'>
    <a-layout-header class='layout-header'>
      <a-input-search placeholder='input search text' style='width: 400px' />
      <a-flex gap='small'>
        <a-button>
          <HomeOutlined />
          Trang chủ
        </a-button>

        <a-button>
          <PlusOutlined />
          Khóa ôn thi
        </a-button>
        <a-button>
          <PlusOutlined />
          Khóa học
        </a-button>
      </a-flex>
      <a-flex gap='small'>
        <a-button class='login-btn' type='primary' @click='useRouter().push(`/login`)'>
          Đăng nhập
        </a-button>
        <a-button class='signup-btn' @click='useRouter().push(`/signup`)'>
          Đăng ký
        </a-button>
      </a-flex>
    </a-layout-header>
    <a-layout-content>
      <slot />
    </a-layout-content>
  </a-layout>
</template>
<script lang='ts' setup>
function handleMenuClick() {
}

function handleButtonClick() {
}
</script>
<style lang='scss'>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

.login-btn {
  width: 98px;
}

.signup-btn {
  width: 98px;
  background-color: $primary;
  color: $black;
  border-color: $blue;
}
</style>
