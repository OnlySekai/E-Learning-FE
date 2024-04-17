export interface CourseFigureChapter {
  figureName: string
  figureNumber: number
}

export interface CourseChapterEntity {
  chapterName: string
  chapterNumber: number
  figures: CourseFigureChapter[]
}

export interface CourseEntity {
  _id: string
  courseName: string
  chapters: CourseChapterEntity[]
}
