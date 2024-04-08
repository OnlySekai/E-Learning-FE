<template>
  <a-layout class="layout">
    <a-layout-header class="sheet-header">
      <div class="logo" />
      <a-typography-title class="title"
        >{{ courseStore.courseName }}
        <ReadOutlined />
      </a-typography-title>
    </a-layout-header>

    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-flex justify="center" gap="middle">
        <DuringQuizInformation />
        <DuringQuizWorkingArea />
      </a-flex>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      E-learning ©2024 Created by Only Sekai
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
const courseStore = useCourseStore()
const sheetId = useRoute().params.id as string

await useAsyncData('get-course', () => courseStore.fetchCourse(sheetId))
</script>

<style scoped lang="scss">
.sheet-header {
  display: flex;
  align-items: center;
  > .title {
    color: $primary;
  }
}
</style>
