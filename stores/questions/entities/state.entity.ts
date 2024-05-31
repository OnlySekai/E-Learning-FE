import type { SearchEntity } from '~/stores/entities/search.entity'
import type { ListQuestionResponse } from '../dto/listQuestion.response'

export interface QuestionStateEntity extends ListQuestionResponse {
  indexSelected?: number
  query: SearchEntity | QuestionQueryEntity
}

export interface QuestionQueryEntity {
  id: string
  figure: string
  chapter: string
}
