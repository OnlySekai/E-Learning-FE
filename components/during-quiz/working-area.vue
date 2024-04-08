<template>
  <a-flex gap="middle" vertical class="working-area">
    <a-card class="question">
      <a-typography-text strong
        >Câu hỏi <span>{{ quizStore.questionIndex }}</span
        >:
      </a-typography-text>
      <a-typography-text class="question-content">
        {{ selectedQuestion?.question }}</a-typography-text
      >
    </a-card>
    <a-card class="-center">
      <a-checkbox-group
        class="checkbox-group"
        v-model:value="selectedQuestion.answers"
        :options="selectedQuestion.options"
      />
      <template #actions>
        <a-typography-text key="back" @click="() => goToQuestion(-1)"
          >Câu trước</a-typography-text
        >
        <a-typography-text key="submit">Submit</a-typography-text>
        <a-typography-text key="next" @click="() => goToQuestion(1)"
          >Câu tiếp theo</a-typography-text
        >
      </template>
    </a-card>
    <a-pagination
      class="-center"
      v-model:current="quizStore.questionIndex"
      show-quick-jumper
      :total="quizStore.questions.length * 10"
      @change="quizStore.goToQuestion"
    />
  </a-flex>
</template>

<script setup lang="ts">
const quizStore = useQuizStore();
await useAsyncData("get-quiz", () => quizStore.fetchQuizSheet("1"));
const selectedQuestion = computed(
  () => quizStore.questions[quizStore.questionIndex - 1]
);

function goToQuestion(offset: number) {
  quizStore.goToQuestion(quizStore.questionIndex + offset);
}
</script>

<style scoped lang="scss">
.working-area {
  min-width: 50%;
  > .question {
    min-height: 34%;
    background-color: $yellow;
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
</style>
