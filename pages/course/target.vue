<template>
  <CourseCarousel />
  <div class='target-title'>
    <p>NHẬP THÔNG TIN ĐỂ TẠO LỘ TRÌNH CÁ NHÂN</p>
  </div>
  <a-row :gutter='[40,40]'>
    <a-col v-for='(rows, index) in splitCols' :key='index' :span='12'>
      <a-flex v-for='item in rows' :key='item.id' :vertical='true'>
        <label>
          {{ item.config.label }}
        </label>
        <a-select v-if="item.type === 'select'" :options='item.config.options '
                  v-model:value='data[item.id]'>
        </a-select>
        <a-input-number v-else v-model:value='data[item.id]' :min='item.config.min!'
                        :max='item.config.max!' style='width: 100%'>
          <template #upIcon>
            <ArrowUpOutlined />
          </template>
          <template #downIcon>
            <ArrowDownOutlined />
          </template>
        </a-input-number>
      </a-flex>
    </a-col>
  </a-row>
  <a-flex :vertical='false' justify='space-between' class='tutorial-details'>
    <div class='huongDan' style='width: 60%'>
      <p>Hướng dẫn làm bài trắc nghiệm:</p>
      <p>1. Click vào nút "Bắt đầu làm bài" để tiến hành làm bài thi <br>
        2. Ở mỗi câu hỏi, chọn đáp án đúng <br>
        3. Hết thời gian làm bài, hệ thống tự thu bài. Bạn có thể nộp bài trước khi thời gian kết thúc bằng cách ấn
        vào
        nút nộp bài.</p>
    </div>
    <div style='display: flex; justify-content: center; align-items: center; width: 29%'>
      <a-button type='primary' @click='onSubmit'>Bắt đầu làm bài</a-button>
    </div>
  </a-flex>
</template>
<script setup lang='ts'>
definePageMeta({
  layout: 'course',
})

interface selectType {
  id: string,
  type: 'inputNumber' | 'select'
  config: {
    label: string,
    min?: number,
    max?: number,
    options?: {
      value: unknown,
      label: string,
    }[]
  }
}

const selectConfig: selectType[] = [
  {
    id: 'score',
    type: 'inputNumber',
    config: {
      label: 'Điểm đầu ra:',
      min: 0,
      max: 10,
    },
  },
  {
    id: 'period',
    type: 'select',
    config: {
      label: 'Chọn kì thi',
      options: [
        {
          value: 1,
          label: 'Kì giữa kì 1',
        },
        {
          value: 2,
          label: 'Kì giữa kì 2',
        },
        {
          value: 3,
          label: 'Kì cuối kì',
        },
      ],
    },
  },
  {
    id: 'remainDays',
    type: 'inputNumber',
    config: {
      label: 'Số ngày còn lại:',
      min: 0,
      max: 365,
    },
  },
  {
    id: 'studiedChapter',
    type: 'select',
    config: {
      label: 'Chọn chương đã học',
      options: [
        {
          value: 0,
          label: 'Chương 1',
        },
        {
          value: 1,
          label: 'Chương 2',
        },
        {
          value: 2,
          label: 'Chương 3',
        },
      ],
    },
  },
]

const halfLength = Math.floor(selectConfig.length / 2)

const splitCols = [
  selectConfig.slice(0, halfLength),
  selectConfig.slice(halfLength),
]

const data = reactive({
  score: null,
  period: null,
  remainDays: null,
  studiedChapter: null,
})

function onSubmit() {
  console.log(data)
}
</script>
<style scoped lang='scss'>
.title1 {
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: $yellow;
}
</style>