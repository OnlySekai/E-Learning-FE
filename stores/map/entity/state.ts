export interface StudyMapStateEntity {
  remainDays: number
  calendar: Record<string, CaLendarStudyEntity>
  chapters: CourseChapterEntity[]
}

export interface CaLendarStudyEntity {
  complete: boolean
  message: string
}
