<template>
  <a-layout>
    <a-layout-sider
      reverseArrow
      breakpoint="lg"
      collapsedWidth="0"
      class="layout-sider"
      :style="{ backgroundColor: '#F5F5F5' }"
      width="400"
    >
      <a-flex
        vertical
        gap="large"
        align="center"
        ,
        style="margin-right: 10px; margin-left: 10px"
      >
        <app-calendar class="calendar"></app-calendar>

        <a-card title="Cần hoàn thành" style="width: 100%">
          <a-space direction="vertical">
            <a-typography-link type="success">
              <CheckCircleOutlined /> Chương 1 dạng 1
            </a-typography-link>
            <a-typography-link type="success">
              <CheckCircleOutlined /> Chương 1 dạng 2</a-typography-link
            >
            <a-typography-link type="danger">
              <CloseCircleOutlined /> Chương 1 dạng 3
            </a-typography-link>
          </a-space>
        </a-card>

        <a-card title="Lộ trình học ">
          <a-tree :tree-data="treeData" @select="console.log"> </a-tree>
        </a-card>
      </a-flex>
    </a-layout-sider>
    <a-layout-content>
      <a-flex vertical gap="large">
        <CourseMapChapter
          v-for="(item, index) in mapContent"
          :chapter-name="item.chapterName"
          :figure-name="item.figureName"
          :key="index"
        />
      </a-flex>
    </a-layout-content>
    <a-layout-sider
      breakpoint="sm"
      collapsedWidth="0"
      class="layout-sider"
      style="background-color: #f5f5f5"
      width="400"
    >
      <a-flex
        vertical
        gap="large"
        align="center"
        style="margin-right: 10px; margin-left: 10px"
      >
        <a-card style="width: 100%">
          <template #title>
            <a-typography-title :level="3">
              <BookOutlined />Luyện đề
            </a-typography-title>
          </template>
          <template #actions>
            <a-button type="primary">
              <PlusSquareOutlined />
              TÀI LIỆU THAM KHẢO
            </a-button>
          </template>
          <a-space direction="vertical">
            <a-typography-link>Thi thử lần 1 </a-typography-link>
            <a-typography-link> Thi thử lần 2 </a-typography-link>
            <a-typography-link> Thi thử cuối kì </a-typography-link>
          </a-space>
        </a-card>
        <a-card style="width: 100%">
          <template #title>
            <a-typography-title :level="3">
              <FlagOutlined />REMEMBER
            </a-typography-title>
          </template>
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
        </a-card>
      </a-flex>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import type { DataNode, TreeDataItem } from 'ant-design-vue/es/tree'

definePageMeta({
  layout: 'logined',
})
const courseStore = useCourseStore()
const { chapters } = storeToRefs(courseStore)
const treeData = computed((): TreeDataItem[] => {
  if (!chapters?.value) return []
  return chapters.value.map((chapter): DataNode => {
    const { chapterNumber, chapterName, figures } = chapter
    return {
      key: `${chapterNumber}`,
      title: `Chương ${chapterNumber}: ${chapterName}`,
      children: figures.map((figure): DataNode => {
        const { figureNumber, figureName } = figure
        return {
          key: `${chapterNumber}-${figureNumber}`,
          title: `Dạng ${figureNumber}: ${figureName}`,
        }
      }),
    }
  })
})

const mapContent = computed(() => {
  if (!chapters?.value) return []
  const mapStudyConfig: { figureName: string; chapterName: string }[] = []
  chapters.value.forEach((chapter) => {
    const { chapterName, figures, chapterNumber } = chapter
    figures.forEach((figure) => {
      const { figureName, figureNumber } = figure
      mapStudyConfig.push({
        figureName: `Dạng ${figureNumber} ${figureName}`,
        chapterName: ` Chương ${chapterNumber}: ${chapterName}`,
      })
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
