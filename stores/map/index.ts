import { USER_ENDPOINT } from '~/constants/endpoint'
import type { CaLendarStudyEntity, StudyMapStateEntity } from './entity/state'
import mapConfigMock from '~/assets/mock/map.json'
import type { GetMissionResponse } from './dto/get-mission.response'
const isMock = useRuntimeConfig().public.mockEnable

export const useStudyMapStore = defineStore('map', {
  state: (): StudyMapStateEntity => ({
    calendar: {},
    remainDays: 0,
    chapters: [],
  }),
  actions: {
    async fetchStudyMap() {
      const response = isMock
        ? mapConfigMock
        : await $api(USER_ENDPOINT.getMap.path, {
            method: USER_ENDPOINT.getMap.method,
          })
      this.$patch(response as StudyMapStateEntity)
    },
    async fetchMission() {
      const response: GetMissionResponse[] = await $api(
        USER_ENDPOINT.getMission.path
      )
      const calendar = response.reduce(
        (pre, { dueDate, isComplete, title, id }) => {
          const key = dueDate.split('T')[0]
          if (!pre[key]) {
            pre[key] = []
          }
          pre[key].push({
            complete: isComplete,
            message: title,
            id,
          })
          return pre
        },
        {} as Record<string, CaLendarStudyEntity[]>
      )
      this.$patch({ calendar })
    },
  },
})
