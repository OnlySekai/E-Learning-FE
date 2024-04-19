<template>
  <a-layout class="layout">
    <a-layout-header class="course-header">
      <div class="logo" />
      <a-typography-title class="title"
        >{{ courseStore.$state.courseName }}
        <ReadOutlined />
      </a-typography-title>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <slot />
    </a-layout-content>
    <a-layout-footer class="course-footer">
      <a-flex justify="space-between">
        <a-flex :vertical="true" style="width: 30%">
          <div class="title">CÁC CHUYÊN MỤC CHÍNH</div>
          <div>
            <p>Trắc nghiệm</p>
            <p>Chương trình</p>
            <p>Ngân hàng câu hỏi</p>
          </div>
        </a-flex>
        <a-flex :vertical="true" style="width: 30%">
          <div class="title">CÁC CHUYÊN MỤC CHÍNH</div>
          <div>
            <p>Trắc nghiệm</p>
            <p>Chương trình</p>
            <p>Ngân hàng câu hỏi</p>
          </div>
        </a-flex>
        <a-flex :vertical="true" style="width: 30%">
          <div class="title">CÁC CHUYÊN MỤC CHÍNH</div>
          <div>
            <p>Trắc nghiệm</p>
            <p>Chương trình</p>
            <p>Ngân hàng câu hỏi</p>
          </div>
        </a-flex>
      </a-flex>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
const courseStore = useCourseStore()
await useAsyncData('get-course', () => courseStore.fetchCourse())
</script>

<style scoped lang="scss">
.course-header {
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  > .title {
    color: $primary;
  }
}

.course-footer {
  margin: 0 10% 0 10%;
}

.course-footer .title {
  border-bottom: solid 2px;
  border-bottom-color: $gold;
  color: $gold;
  height: 50px;
  align-content: center;
}
</style>
