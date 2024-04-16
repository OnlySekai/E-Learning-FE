export interface SubmitAnswerRequest {
  sheetId: string
  questionId: number
  answer: unknown[]
  duration: number
}
