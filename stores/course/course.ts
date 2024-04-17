import type { Course } from '~/types/course.dto'

import { COURSE_ENDPOINT } from '~/constants/endpoint'
import { COURSE_ID } from '~/constants/course'
export const useCourseStore = defineStore('course', {
  state: (): Partial<Course> => ({
    chapters: [],
  }),
  actions: {
    async fetchCourse() {
      const response = await $fetch(
        COURSE_ENDPOINT.getCourseById.path.replace('{courseId}', COURSE_ID),
        {
          method: COURSE_ENDPOINT.getCourseById.method,
        }
      )
      this.$patch(response as Course)
    },
  },
})
