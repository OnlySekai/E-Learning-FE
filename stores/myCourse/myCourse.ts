import { USER_ENDPOINT } from '~/constants/endpoint'
import type { AllCourseEntity, MyCourseEntity } from './entity/myCourse.entity'
import myCourseConfigMock from 'assets/mock/myCourse.json'
import allCourseConfigMock from 'assets/mock/allCourse.json'

const isMock = true

export const useMyCourseStore = defineStore('myCourse', {
  state: (): Partial<MyCourseEntity> => ({}),
  actions: {
    async fetchMyCourse() {
      const response = isMock
        ? myCourseConfigMock
        : await $fetch(USER_ENDPOINT.getMap.path, {
          method: USER_ENDPOINT.getMap.method,
        })
      this.$patch(response as MyCourseEntity)
    },
  },
})
export const useAllCourseStore = defineStore('allCourse', {
  state: (): Partial<AllCourseEntity> => ({}),
  actions: {
    async fetchAllCourse() {
      const response = isMock
        ? allCourseConfigMock
        : await $fetch(USER_ENDPOINT.getMap.path, {
          method: USER_ENDPOINT.getMap.method,
        })
      this.$patch(response as AllCourseEntity)
    },
  },
})
