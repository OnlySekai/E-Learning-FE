<template>
  <a-spin :spinning="loading">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-spin>
</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>

<script setup lang="ts">
const { loading } = useLoading()
</script>
