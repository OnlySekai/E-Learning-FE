import { USER_ENDPOINT } from '~/constants/endpoint'
import type { StudyMapStateEntity } from './entity/state'
import mapConfigMock from '~/assets/mock/map.json'
const isMock = useRuntimeConfig().public.mockEnable

export const useStudyMapStore = defineStore('map', {
  state: (): Partial<StudyMapStateEntity> => ({}),
  actions: {
    async fetchStudyMap() {
      const response = isMock
        ? mapConfigMock
        : await $fetch(USER_ENDPOINT.getMap.path, {
            method: USER_ENDPOINT.getMap.method,
          })
      this.$patch(response as StudyMapStateEntity)
    },
  },
})
