<template>
  <a-card>
    <template #title>
      <a-space>
        <a-typography-title
          :level="4"
          style="word-wrap: break-word; white-space: normal; color: white"
        >
          <BookOutlined />
          {{ chapterName }}
        </a-typography-title>
      </a-space>
    </template>
    <a-flex vertical justify="center" align="center">
      <a-typography-title
        :level="4"
        style="word-wrap: break-word; white-space: normal; text-align: center"
      >
        {{ figureName }}
      </a-typography-title>
      <AppIconTask type="theory" class="icon" @onClick="showModal" />
      <a-modal
        title="Document"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div v-for="doc in figureConfig.documents" :key="doc.url">
          <iframe
            v-if="visible && doc.url"
            :src="getUrl(doc.url)"
            width="100%"
            height="500px"
          ></iframe>
        </div>
      </a-modal>
      <AppIconTask
        v-for="i in 4"
        @click="joinQuiz(i)"
        :type="i"
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
  figureConfig: CourseFigureChapter
  chapterName: string
  chapterNumber: number
}>()
const quizStore = useQuizStore()
const {
  figureConfig: { figureName },
} = props

async function joinQuiz(level: number) {
  const sheetId = await quizStore.joinQuizLevel({
    level,
    figure: props.figureConfig.figureNumber,
    chapter: props.chapterNumber,
  })
  navigateTo(`/quiz/attempt/${sheetId}`)
}

const visible = ref(false)

const showModal = () => {
  visible.value = true
}

const handleOk = () => {
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}

const getUrl = (url: string) => {
  const base = url.split('/view')[0]
  // Append '/preview' to the base URL
  return `${base}/preview`
}
</script>

<style scoped lang="scss">
::v-deep(.ant-card-head) {
  background-color: $blue;
}

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
