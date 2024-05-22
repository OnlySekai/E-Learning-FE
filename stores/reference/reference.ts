import { USER_ENDPOINT } from '~/constants/endpoint'
import type { CourseReferenceEntity } from './entity/reference.entity'
import ReferenceConfigMock from 'assets/mock/reference.json'

const isMock = true

export const useReferenceStore = defineStore('reference', {
  state: (): Partial<CourseReferenceEntity> => ({}),
  actions: {
    async fetchMyCourse() {
      const response = isMock
        ? ReferenceConfigMock
        : await $fetch(USER_ENDPOINT.getMap.path, {
          method: USER_ENDPOINT.getMap.method,
        })
      this.$patch(response as CourseReferenceEntity)
    },
  },
})