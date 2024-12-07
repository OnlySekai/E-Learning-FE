<template>
  <div style='background-color: #F1F4F7'>
    <div class='course-list-container'>
      <div style='font-size: 24px; font-weight: bold ; margin: 0 0 20px 100px'>Khóa học của tôi</div>
      <a-list item-layout='vertical'
              size='small'
              :pagination='pagination'
              :data-source='myCourse'
              :grid='{gutter:30}'
              class='course-list'
      >
        <template #renderItem='{ item }'>
          <a-list-item key='item.title' @click='goToCourse(item._id)'>
            <div class='course-card'>
              <img
                height='175px'
                width='300px'
                alt='logo'
                :src='item.courseImage'
              />
              <a>{{ item.courseName }}</a>
            </div>
          </a-list-item>
        </template>
      </a-list>
    </div>
    <div class='course-list-container'>
      <div style='font-size: 24px; font-weight: bold ; margin: 0 0 20px 100px'>Các khóa học</div>
      <a-list item-layout='vertical'
              size='small'
              :pagination='pagination'
              :data-source='allCourse'
              :grid='{gutter:30}'
              class='course-list'
      >
        <template #renderItem='{ item }'>
          <a-list-item key='item.title' @click='goToCourse(item._id)'>
            <div class='course-card'>
              <img
                height='175px'
                width='300px'
                alt='logo'
                :src='item.courseImage'
              />
              <a>{{ item.courseName }}</a>
            </div>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>
<script setup lang='ts'>
definePageMeta({
  layout: 'logined',
})

import { useAllCourseStore, useMyCourseStore } from '~/stores/myCourse/myCourse'

const myCourseStore = useMyCourseStore()
await useAsyncData('get-my-course', () => myCourseStore.fetchMyCourse())

const allCourseStore = useAllCourseStore()
await useAsyncData('get-all-course', () => allCourseStore.fetchAllCourse())
const allCourse = allCourseStore.$state.allCourse
const myCourse = myCourseStore.$state.userCourse

const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 3,
}
const mainCourseId = '661ab9d6b63bd525425ba91b'

function goToCourse(id: string) {
  if (id === mainCourseId) {
    useRouter().push(`course/${mainCourseId}/map`)
  }

}
</script>
<style lang='scss' scoped>
.course-list-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

.course-list {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: $secondary;
  padding-top: 30px;
  width: 80%;
  align-self: center;
  border-radius: 15px;
}

.course-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: $secondary;
  box-shadow: 0 2px 3px 0;
  cursor: pointer;
}


.course-card:hover {
  box-shadow: 0 1px 10px 1px;
}

a {
  color: $black;
}

</style>