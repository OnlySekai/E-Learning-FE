<template>
  <div style="width: 270px; border: 1px solid #d9d9d9; border-radius: 4px">
    <a-calendar
      v-model:value="value"
      :fullscreen="false"
      @panelChange="onPanelChange!"
      @select=""
    >
      <template
        #headerRender="{ value: current, type, onChange, onTypeChange }"
      >
        <div style="padding: 10px">
          <a-typography-title :level="3"
            >Còn lại {{ remainDays || 0 }} ngày</a-typography-title
          >
          <a-row type="flex" justify="space-between">
            <a-col>
              <a-radio-group
                size="small"
                :value="type"
                @change="(e) => onTypeChange(e.target.value)"
              >
                <a-radio-button value="month">Month</a-radio-button>
                <a-radio-button value="year">Year</a-radio-button>
              </a-radio-group>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                class="my-year-select"
                :value="String(current.year())"
                @change="
                  (newYear) => {
                    onChange(current.year(+newYear!))
                  }
                "
              >
                <a-select-option
                  v-for="val in getYears(current)"
                  :key="String(val)"
                  class="year-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                :value="String(current.month())"
                @change="
                  (selectedMonth) => {
                    onChange(current.month(parseInt(String(selectedMonth), 10)))
                  }
                "
              >
                <a-select-option
                  v-for="(val, index) in getMonths(current)"
                  :key="String(index)"
                  class="month-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </div>
      </template>
      <template #dateFullCellRender="{ current }">
        <a-popover title="Title" v-if="getStudyNotif(current)">
          <template #content>
            <p>{{ getStudyNotif(current)?.message }}</p>
          </template>
          <a-typography-text
            :disabled="!isSameMonth(current)"
            :strong="isSameDay(current, today)"
            :underline="isSameDay(value, current)"
            type="danger"
            >{{ current.date() }}</a-typography-text
          >
        </a-popover>
        <a-typography-text
          v-else
          :disabled="!isSameMonth(current)"
          :strong="isSameDay(current, today)"
          :underline="isSameDay(value, current)"
          >{{ current.date() }}</a-typography-text
        >
      </template>
    </a-calendar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
const today = dayjs()
const studyMapStore = useStudyMapStore()
const { remainDays, calendar } = studyMapStore.$state

const value = ref<Dayjs>(today)
function getStudyNotif(value: Dayjs): CaLendarStudyEntity | undefined {
  const dateString = value.format('YYYY-MM-DD')
  if (!calendar) return
  return calendar[dateString]
}

function isSameMonth(day: Dayjs): boolean {
  return day.month() === value.value?.month()
}

function isSameDay(day1: Dayjs, day2: Dayjs): boolean {
  return day1.isSame(day2, 'date')
}

const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode)
}

const getMonths = (value: Dayjs) => {
  const localeData = value.localeData()
  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(localeData.monthsShort(value.month(i)))
  }
  return months
}

const getYears = (value: Dayjs) => {
  const year = value.year()
  const years = []
  for (let i = year - 10; i < year + 10; i += 1) {
    years.push(i)
  }
  return years
}
</script>
