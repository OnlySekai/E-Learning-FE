<template>
  <div>auth</div>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
const courseStore = useCourseStore()

try {
  await userStore.fetchProfile()
  sessionStorage.setItem('logged', 'true')
  await useAsyncData('get-course', () => courseStore.fetchCourse())
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
