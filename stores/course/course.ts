import { COURSE_ENDPOINT } from '~/constants/endpoint'
import { COURSE_ID } from '~/constants/course'
import type { CourseEntity } from './entities/course.entity'
import course from '~/assets/mock/course.json'

const isMock = useRuntimeConfig().public.mockEnable

export const useCourseStore = defineStore('course', {
  state: (): Partial<CourseEntity> => ({
    chapters: [],
  }),
  actions: {
    async fetchCourse() {
      const response = isMock
        ? course
        : await $fetch(
            COURSE_ENDPOINT.getCourseById.path.replace('{courseId}', COURSE_ID),
            {
              method: COURSE_ENDPOINT.getCourseById.method,
            }
          )
      this.$patch(response as CourseEntity)
    },
  },
})
