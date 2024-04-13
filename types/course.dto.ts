export interface CourseFigure {
  figureName: string
  figureNumber: number
}

export interface CourseChapter {
  chapterName: string
  chapterNumber: number
  figures: CourseFigure[]
}

export interface Course {
  _id: string
  courseName: string
  chapters: CourseChapter[]
}
