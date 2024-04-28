<template>
  <a-card>
    <template #title>
      <a-typography-title
        :level="4"
        style="word-wrap: break-word; white-space: normal"
      >
        <BookOutlined />
        {{ chapterName }}
      </a-typography-title>
      <a-divider type="vertical" />
    </template>
    <a-flex vertical justify="center" align="center">
      <a-typography-title
        :level="4"
        style="word-wrap: break-word; white-space: normal"
      >
        {{ figureName }}
      </a-typography-title>
      <AppIconTask type="theory" class="icon" />
      <AppIconTask
        v-for="i in 4"
        :type="i"
        disabled
        :class="[
          'icon',
          {
            '-left': i % 2 === 0,
            '-right': i % 2 === 1,
          },
        ]"
      />
      <AppIconTask type="end" disabled class="icon" />
    </a-flex>
  </a-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  chapterName: string
  figureName: string
}>()
</script>
<style scoped lang="scss">
.icon {
  width: 5em;
  height: 5em;
  cursor: pointer;
  &.-left {
    margin-right: 5em;
  }
  &.-right {
    margin-left: 5em;
  }
}
</style>
