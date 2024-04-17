export interface SubmitAnswerRequest {
  sheetId: string
  questionIdx: number
  answers: unknown[]
  duration: number
}
