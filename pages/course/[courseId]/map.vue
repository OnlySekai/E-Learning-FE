<template>
  <a-layout>
    <a-layout-sider
      reverseArrow
      breakpoint="lg"
      collapsedWidth="0"
      class="layout-sider"
    >
      <a-card>
        <app-calendar class="calendar" </app-calendar>
        <a-tree :tree-data="treeData"> </a-tree>
      </a-card>
    </a-layout-sider>
    <a-layout-content>
      <CourseMapChapter chapterName="Chương 1" figureName="Dang 1" />
      <CourseMapChapter chapterName="Chương 2" figureName="Hình 2.1" />
    </a-layout-content>
    <a-layout-sider>
      <a-card>
        <template #title>
          <a-typography-title :level="3">
            <BookOutlined />Luyện đề</a-typography-title
          >
        </template>
      </a-card>
      <a-card>
        <template #title>
          <a-typography-title :level="3">
            <FlagOutlined />REMEMBER</a-typography-title
          >
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
          <a-card>
            <a-typography>content</a-typography>
          </a-card>
        </template>
      </a-card>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import { BookOutlined } from '@ant-design/icons-vue'
import type { TreeDataItem } from 'ant-design-vue/es/tree'
import { useStudyMapStore } from '~/stores/map'

definePageMeta({
  layout: 'logined',
})
const studyMapStore = useStudyMapStore()
// const remainDays = studyMapStore.$state.remainDays/
await useAsyncData('get-study-map', () => studyMapStore.fetchStudyMap())
const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          { title: 'leaf', key: '0-0-0-0' },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          { title: 'leaf', key: '0-0-1-0' },
          { title: 'leaf', key: '0-0-1-1' },
        ],
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
.ant-layout-sider:not(.ant-layout-sider-collapsed) {
  min-width: 320px !important;
}
</style>
