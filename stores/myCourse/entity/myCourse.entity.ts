export interface MyCourseEntity {
  userId?: string,
  userCourse: course[]
}

export interface AllCourseEntity {
  _id: string,
  allCourse: course[]
}

export interface course {
  _id: string,
  courseName: string,
  courseImage: string,
}