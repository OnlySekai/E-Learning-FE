// create interface quiz sheet link quiz-answers.schema.ts

export interface AnswerHistoryEntity {
  answers: string[]
  start: Date
  duration: number
  correct?: boolean
}

export interface LeanerQuestionEntity {
  question: string
  images: string[]
  histories: AnswerHistoryEntity[]
  options?: string[]
  answers: string[]
  rightAnswers: string[]
  correct: boolean
}

export interface QuizAnswerSheetEntity {
  configType: string
  courseId: string
  quizDuration: number
  fullName: String
  questions: LeanerQuestionEntity[]
  submitted?: boolean
  score?: number
  createdAt?: Date
}
