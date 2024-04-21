<template>
  <a-card>
    <a-card :title="chapterName">
      {{ figureName }}
      <template #extra>
        <a-button type="primary">
          <PlusSquareOutlined />
          TÀI LIỆU THAM KHẢO
        </a-button>
      </template>
    </a-card>

    <div><CiCircleFilled /></div>
    <div><CiCircleFilled /></div>
    <div><CiCircleFilled /></div>
    <div><CiCircleFilled /></div>
    <div><CiCircleFilled /></div>
  </a-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  chapterName: string
  figureName: string
}>()
</script>
