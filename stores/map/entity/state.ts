export interface StudyMapStateEntity {
  remainDays: number
  calendar: Record<string, CaLendarStudyEntity[]>
  chapters: CourseChapterEntity[]
}

export interface CaLendarStudyEntity {
  id: string
  complete: boolean
  message: string
}
