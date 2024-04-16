import { QUIZ_ENDPOINT } from '~/constants/endpoint'
import type { LeanerQuestion, QuizAnswerSheet } from '~/types/quiz-sheet.dto'

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
    configType: '',
    courseId: '',
    quizDuration: 0,
    questions: [],
    fullName: '',
    questionIndex: 1,
  }),
  getters: {
    currentQuestion(state): LeanerQuestion {
      return state.questions[this.questionIndex - 1]
    },
  },
  actions: {
    async fetchQuizSheet(sheetId: string) {
      // fetch quiz sheet from api
      const response = await $fetch(
        QUIZ_ENDPOINT.getQuizSession.path.replace('{sessionId}', sheetId)
      )
      const { questions, ...sheetInfo } = response as {
        questions: any[]
        [key: string]: any
      }
      const mapQuestion = questions.map(({ question: questionConfig }) => {
        const {
          question,
          images,
          config: { options },
        } = questionConfig
        // remove all path after /d 1 path in image url
        return {
          question,
          images,
          options,
          histories: [],
          correct: false,
        }
      })
      // set quiz sheet to the store
      this.$patch({ ...sheetInfo, questions: mapQuestion, questionIndex: 1 })
    },
    goToQuestion(value: number) {
      if (value < 1 || value > this.questions.length) return
      const currentHistory = this.currentQuestion.histories.at(-1)!
      currentHistory.duration = Date.now() - currentHistory.start.valueOf()
      this.currentQuestion.histories.at(-1)!.answers =
        this.currentQuestion.answers || []
      this.questionIndex = value
      this.currentQuestion.histories.push({
        answers: [],
        start: new Date(),
        duration: 0,
      })
    },
  },
})
