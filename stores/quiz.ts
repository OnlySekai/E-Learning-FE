import type { QuizAnswerSheet } from '~/types/quiz-sheet.dto'

// export const useQuizStore = defineStore("quiz", () => {
//   const quizSheet: Ref<QuizAnswerSheet | null> = ref(null);

//   // function to fetch quiz sheet
//   async function fetchQuizSheet(sheetId: string) {
//     // fetch quiz sheet from api
//     const response = await $fetch(`/api/quiz-sheet/${sheetId}`);
//     // set quiz sheet to the store
//     quizSheet.value = response as QuizAnswerSheet;
//   }
//   return { quizSheet, fetchQuizSheet };
// });

interface UseQuizStateInterface extends QuizAnswerSheet {
  questionIndex: number
}

export const useQuizStore = defineStore('quiz', {
  state: (): UseQuizStateInterface => ({
    configId: '',
    courseId: '',
    quizDuration: 0,
    questions: [],
    fullName: '',
    questionIndex: 1,
  }),
  actions: {
    async fetchQuizSheet(sheetId: string) {
      // fetch quiz sheet from api
      // const response: QuizAnswerSheet = await $fetch(
      //   `/api/quiz-sheet/${sheetId}`
      // );
      // set quiz sheet to the store
      const response: QuizAnswerSheet = {
        configId: '1',
        courseId: '1',
        quizDuration: 60 * 60 * 1000,
        fullName: 'Nguyễn V',
        questions: [
          {
            question: 'Câu hỏi 1',
            histories: [
              {
                answers: ['A'],
                duration: 10,
                correct: true,
              },
            ],
            correct: true,
          },
          {
            question: 'Câu hỏi 2',
            histories: [
              {
                answers: ['A'],
                duration: 10,
                correct: true,
              },
            ],
            correct: true,
          },
          {
            question: 'Câu hỏi 3',
            histories: [
              {
                answers: ['A'],
                duration: 10,
                correct: true,
              },
            ],
            correct: true,
          },
          {
            question: 'Câu hỏi 4',
            histories: [
              {
                answers: ['A'],
                duration: 10,
                correct: true,
              },
            ],
            correct: true,
          },
        ],
      }
      response.questions.forEach((value) => {
        value.options = ['A', 'B', 'C', 'D']
        value.answers = []
      })
      this.$patch(response)
    },
    goToQuestion(value: number) {
      if (value < 1 || value > this.questions.length) return
      this.questionIndex = value
    },
  },
})
