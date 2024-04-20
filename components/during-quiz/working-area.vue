<template>
  <a-flex gap="middle" vertical class="working-area">
    <a-card class="question" :title="questionTittle">
      <a-typography-text class="question-content">
        {{ selectedQuestion?.question }}</a-typography-text
      >
      <div class="list-image-wrapper">
        <app-image
          v-for="link in selectedQuestion.images"
          :key="link"
          :src="link"
          class="question-image"
        />
      </div>
    </a-card>
    <a-card class="-center">
      <a-checkbox-group
        class="checkbox-group"
        v-model:value="chossenAnwser"
        :disabled="readonly"
        :options="selectedQuestion.options"
      >
        <template #label="{ value }">
          <span :class="{ '-error': isWrongAnswer(value) }">{{ value }}</span>
        </template>
      </a-checkbox-group>
      <template #actions>
        <a-typography-link key="back" @click="() => goToQuestion(-1)"
          >Câu trước</a-typography-link
        >
        <a-typography-link key="next" @click="() => goToQuestion(1)"
          >Câu tiếp theo</a-typography-link
        >
      </template>
    </a-card>
    <a-pagination
      class="-center"
      v-model:current="quizStore.questionIndex"
      show-quick-jumper
      :total="quizStore.questions.length * 10"
    />
  </a-flex>
</template>

<script setup lang="ts">
const props = defineProps({
  readonly: Boolean,
})
const quizStore = useQuizStore()
const selectedQuestion = computed(() => quizStore.currentQuestion)

const chossenAnwser = computed(() =>
  props.readonly
    ? selectedQuestion.value.rightAnswers
    : selectedQuestion.value.answers
)

const questionTittle = computed(() => `Câu hỏi ${quizStore.questionIndex}:`)

const emit = defineEmits(['changePage'])

function goToQuestion(offset: number) {
  emit('changePage', questionTittle.value)
  quizStore.goToQuestion(quizStore.questionIndex + offset)
}

function isWrongAnswer(value: string) {
  return (
    props.readonly &&
    !selectedQuestion.value.rightAnswers.includes(value) &&
    selectedQuestion.value.answers.includes(value)
  )
}
</script>

<style scoped lang="scss">
.working-area {
  min-width: 50%;
  > .question {
    min-height: 35%;
  }
  .-center {
    text-align: center;
  }
}
.checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.-error {
  color: red;
}
</style>
