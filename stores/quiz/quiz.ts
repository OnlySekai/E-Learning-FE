import { QUIZ_ENDPOINT } from '~/constants/endpoint'
import type { SubmitQuizSheetRequest } from './dto/submitQuizSheet.request'
import type { LeanerQuestionEntity } from './entity/quizSheet.entity'
import type { QuizStateEntity } from './entity/state.entity'

import quiz from '~/assets/mock/quiz.json'

const isMock = useRuntimeConfig().public.mockEnable

export const useQuizStore = defineStore('quiz', {
  state: (): QuizStateEntity => ({
    configType: '',
    courseId: '',
    quizDuration: 0,
    questions: [],
    fullName: '',
    questionIndex: 1,
  }),
  getters: {  
    currentQuestion(state): LeanerQuestionEntity {
      return state.questions[this.questionIndex - 1]
    },
  },
  actions: {
    async fetchQuizSheet(sheetId: string) {
      // fetch quiz sheet from api
      const response = isMock
        ? quiz
        : await $fetch(
            QUIZ_ENDPOINT.getQuizSession.path.replace('{sessionId}', sheetId)
          )

      const { questions, ...sheetInfo } = response as {
        questions: any[]
        [key: string]: any
      }
      const mapQuestion: LeanerQuestionEntity[] = questions.map(
        ({ question: questionConfig, histories }) => {
          const {
            question,
            images,
            config: { options, answers = [] },
          } = questionConfig
          const currentAnswers = histories.at(-1)?.answers || []
          return {
            question,
            images,
            options,
            histories: histories || [],
            answers: [...currentAnswers],
            rightAnswers: answers,
            correct: false,
          }
        }
      )
      // set quiz sheet to the store
      this.$patch({ ...sheetInfo, questions: mapQuestion, questionIndex: 1 })
    },

    async submitAnswer(
      questionIdx: number,
      payload: Omit<SubmitAnswerRequest, 'sheetId' | 'questionIdx'>
    ) {
      await $fetch(QUIZ_ENDPOINT.submitAnswer.path, {
        method: QUIZ_ENDPOINT.submitAnswer.method,
        body: {
          ...payload,
          sheetId: useRoute().params.sheetId,
          questionIdx: questionIdx - 1,
        },
      })
    },

    async submitQuizSheet() {
      const sheetId = useRoute().params.sheetId as string
      const payload: SubmitQuizSheetRequest = {
        sheetId,
      }
      // this.result = await $fetch(QUIZ_ENDPOINT.submitQuiz.path, {
      //   method: QUIZ_ENDPOINT.submitQuiz.method,
      //   body: payload,
      // })
      this.result = {
        score: 10,
        correctAnswers: 10,
        sheetId,
      }
    },

    goToQuestion(value: number) {
      if (value < 1 || value > this.questions.length) return
      const currentHistory = this.currentQuestion.histories.at(-1)!
      currentHistory.duration = Date.now() - currentHistory.start.valueOf()
      currentHistory.answers = [...this.currentQuestion.answers]
      this.submitAnswer(this.questionIndex, currentHistory).catch(console.error)
      this.questionIndex = value
      this.currentQuestion.answers = [
        ...(this.currentQuestion.histories.at(-1)?.answers || []),
      ]
      this.currentQuestion.histories.push({
        answers: [],
        start: new Date(),
        duration: 0,
      })
    },
  },
})
