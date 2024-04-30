<template>
  <a-spin :spinning="loading">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-spin>
</template>

<script setup lang="ts">
const { loading } = useLoading()
</script>
