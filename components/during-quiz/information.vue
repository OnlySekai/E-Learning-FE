<template>
  <a-flex gap="middle" vertical>
    <app-count-down
      :endTime="endTimeCountDown"
      @finish="() => console.log('end')"
      class="count-down"
    />
    <a-card :title="courseStore.$state.courseName">
      <a-space direction="vertical">
        <a-typography-text strong
          >Số câu:
          <span>{{ quizStore.questions.length }}</span></a-typography-text
        >

        <a-typography-text strong
          >Thời gian: <span>{{ duration }}</span> phút</a-typography-text
        >
        <a-typography-text strong
          >Họ và Tên: <span>{{ quizStore.fullName }}</span></a-typography-text
        >
      </a-space>
    </a-card>
    <a-card class="action-button">
      <template #actions>
        <a-typography-link strong @click="() => console.log('submit')"
          >Nộp bài</a-typography-link
        >
        <a-typography-text
          strong
          type="danger"
          @click="() => console.log('exit')"
          >Thoát</a-typography-text
        >
      </template>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts" script>
const courseStore = useCourseStore()
const quizStore = useQuizStore()
const duration = computed(() => quizStore.$state.quizDuration / 60 / 1000)
const endTimeCountDown = computed(
  () => Date.now() + quizStore.$state.quizDuration
)
</script>

<style scoped lang="scss">
.action-button {
  text-align: center;
}
</style>
