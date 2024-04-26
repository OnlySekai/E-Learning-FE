<template>
  <a-layout>
    <a-layout-sider
      reverseArrow
      breakpoint="lg"
      collapsedWidth="0"
      class="layout-sider"
    >
      <a-card >
        <a-typography-title :level="3">
            <CalendarOutlined />Lộ trình học </a-typography-title>
        <a-flex vertical gap="large">
        <app-calendar class="calendar" </app-calendar>
        <a-tree :tree-data="treeData" @select="console.log"> </a-tree>
      </a-flex>
      </a-card>
    </a-layout-sider>
    <a-layout-content>
      <CourseMapChapter v-for="(item, index) in mapContent" :chapter-name="item.chapterName" :figure-name="item.figureName" :key="index" />
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
import type { DataNode, TreeDataItem } from 'ant-design-vue/es/tree'
import { useStudyMapStore } from '~/stores/map'

definePageMeta({
  layout: 'logined',
})
const studyMapStore = useStudyMapStore()
await useAsyncData('get-study-map', () => studyMapStore.fetchStudyMap())
const {chapters =[]} = studyMapStore.$state
const treeData = computed(():TreeDataItem[] => {
  return chapters.map((chapter):DataNode  => {
    const {chapterNumber, chapterName, figures} = chapter
    return {
      key: `${chapterNumber}`,
      title: `Chương ${chapterNumber}: ${chapterName}`,
      children: figures.map((figure):DataNode => {
        const {figureNumber, figureName} = figure
        return {
          key: `${chapterNumber}-${figureNumber}`,
          title: `Dạng ${figureNumber}: ${figureName}`,
        }
      }),
    }
  })
})

const mapContent = computed(() => {
  const mapStudyConfig: {figureName: string; chapterName: string}[] = []
  chapters.forEach((chapter) => {
    const {chapterName, figures,chapterNumber} = chapter
    figures.forEach((figure) => {
      const {figureName, figureNumber} = figure
      mapStudyConfig.push({figureName: `Dạng ${figureNumber} ${figureName}`, chapterName: ` Chương ${chapterNumber}: ${chapterName}`})
    })
  })
  return mapStudyConfig
})
</script>

<style lang="scss" scoped>
.ant-layout-sider:not(.ant-layout-sider-collapsed) {
  min-width: 320px !important;
}
</style>
