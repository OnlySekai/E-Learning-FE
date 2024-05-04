<template>
  <a-flex gap="middle" vertical wrap="wrap">
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
          >Thời gian:
          <span>{{ duration / 60 / 1000 }}</span>
          phút</a-typography-text
        >
        <a-typography-text strong
          >Họ và Tên: <span>{{ quizStore.fullName }}</span></a-typography-text
        >
      </a-space>
    </a-card>
    <a-card class="action-button">
      <template #actions>
        <a-typography-text
          strong
          type="danger"
          @click="
            () =>
              props.readonly ? useRouter().push('/') : openConfirmSubmitSheet()
          "
          >{{ `${props.readonly ? 'Thoát' : 'Nộp bài'}` }}</a-typography-text
        >
        <!-- <a-typography-text
          strong
          type="danger"
          @click="() => console.log('exit')"
          >Thoát</a-typography-text
        > -->
      </template>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts" script>
const props = defineProps<{
  readonly: boolean
}>()
const courseStore = useCourseStore()
const quizStore = useQuizStore()
const duration = computed(() =>
  props.readonly ? 0 : quizStore.$state.quizDuration
)
const endTimeCountDown = computed(() => Date.now() + duration.value)
</script>

<style scoped lang="scss">
.action-button {
  text-align: center;
}
</style>
