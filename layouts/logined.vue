<template>
  <a-layout class='layout'>
    <a-layout-header
      class='layout-header'
      :style="{ backgroundColor: '#F5F5F5' }"
    >
      <img src='/images/logo.png' alt='logo' class='logo' />
      <a-input-search placeholder='input search text' style='width: 200px' />
      <div>
        <a-button>
          <HomeOutlined />
          Trang chủ
        </a-button>
        <a-dropdown>
          <a-button>
            <BellOutlined />
            Thông báo
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href='javascript:;'>1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href='javascript:;'>2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href='javascript:;'>3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <a-dropdown>
          <a-button>
            <UserOutlined />
            Tài khoản
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href='javascript:;'>1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href='javascript:;'>2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href='javascript:;'>3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout-content>
      <slot />
    </a-layout-content>
    <a-layout-footer style='text-align: center'>
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang='ts' setup>
function handleMenuClick() {
}

function handleButtonClick() {
}
</script>
<style lang='scss' scoped>
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

.ant-input {
  float: right;
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
</style>
