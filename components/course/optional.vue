<template>
  <label>{{ select[props.name].name }}</label>
  <a-select
    v-model:value='value'
    show-search
    placeholder='Select a person'
    style='width: 400px'
    :options='options'
    :filter-option='filterOption'
    @focus='handleFocus'
    @blur='handleBlur'
    @change='handleChange'
  ></a-select>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { select } from '~/constants/select'

const props = defineProps<{
  name: string
}>()

const options = ref(select[props.name].value.map((val: string) => {
  return { value: val, label: val }
}))
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
const handleBlur = () => {
  console.log('blur')
}
const handleFocus = () => {
  console.log('focus')
}
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const value = ref<string | undefined>(undefined)
</script>

