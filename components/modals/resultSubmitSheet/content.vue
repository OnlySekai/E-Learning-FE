<template>
  <a-flex vertical justify="center" align="center">
    <img src="/images/logo-congratulation.png" alt="congratulation" />
    <a-typography-title
      :level="2"
      :style="{ textAlign: 'center', color: 'red' }"
    >
      Chúc mừng bạn đã hoàn thành bài kiểm tra
    </a-typography-title>
    <a-flex gap="large" justify="center" align="center">
      <a-typography-title :level="3"> Điểm số: {{ score }} </a-typography-title>
      <a-typography-title :level="3">
        Số câu đúng: {{ correctAnswers }}/{{ numberQuestions }}
      </a-typography-title>
    </a-flex>
  </a-flex>
</template>

<script lang="ts" setup>
const quizStore = useQuizStore()
const { correctAnswers, score } = quizStore.result || {}
const numberQuestions = quizStore.questions.length
</script>
