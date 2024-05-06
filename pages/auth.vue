<template>
  <div>auth</div>
</template>

<script lang="ts" setup>
import { useRememberStore } from '~/stores/remember'

const userStore = useUserStore()
const courseStore = useCourseStore()
const rememberStore = useRememberStore()
const studyMapStore = useStudyMapStore()
try {
  await userStore.fetchProfile()
  sessionStorage.setItem('logged', 'true')
  await Promise.all([
    useAsyncData('get-course', () => courseStore.fetchCourse()),
    useAsyncData('get-remember', () => rememberStore.fetchRemembers()),
    useAsyncData('get-study-map', () => studyMapStore.fetchMission()),
    useAsyncData('get-study-map', () => studyMapStore.fetchStudyMap()),
  ])

  const { query } = useRoute()
  const { redirect, ...restQuery } = query
  navigateTo({
    path: redirect as string,
    query: restQuery,
  })
  console.log('redirect to', redirect)
} catch (error) {
  navigateTo('/login')
}
</script>
