// create interface quiz sheet link quiz-answers.schema.ts

export interface AnswerHistory {
  answers: unknown[]
  start: Date
  duration: number
  correct?: boolean
}

export interface LeanerQuestion {
  question: string
  images: string[]
  histories: AnswerHistory[]
  options?: string[]
  answers?: string[]
  correct: boolean
}

export interface QuizAnswerSheet {
  configType: string
  courseId: string
  quizDuration: number
  fullName: String
  questions: LeanerQuestion[]
  submitted?: boolean
  score?: number
  createdAt?: Date
}
