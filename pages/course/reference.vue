<template>
  <div class='reference-page'>
    <div class='reference-page-title'>
      <p style='font-size: 24px'>TÀI LIỆU THAM KHẢO</p>
    </div>
    <div>
      <a-flex v-for='item in reference' :vertical='true'>
        <NuxtLink :to='"reference#"+item.id'>{{ item.title }}</NuxtLink>
        <a-flex v-for='file in item.referenceFiles' :vertical='true' style='margin-left: 30px'>
          <NuxtLink :to='"reference#"+file.id'>{{ file.title }}</NuxtLink>
        </a-flex>
      </a-flex>
    </div>
    <a-flex v-for='item in reference' :vertical='true' gap='middle' style='margin-top: 30px;'
            wrap='wrap'>
      <div :id='item.id'></div>
      <a-flex class='reference-title' style='width: 80%;'>
        <a :href='item.src' style='font-size: 24px;font-weight: bold;color:black'>{{ item.title }}</a>
      </a-flex>
      <a-flex v-for='file in item.referenceFiles' align='center' :vertical='true' gap='middle'
              style='margin-top: 30px;'>
        <div :id='file.id'></div>
        <a-flex :id='file.id' class='reference-title' style='background-color: #4B89DC;height: 50px;width: 80%;'
                justify='center'
                align='center'>
          <a :href='file.src' style='font-size: 24px;font-weight: bold;color: white'>{{ file.title }}</a>
        </a-flex>
        <iframe :src='file.iframeSrc' style='height:640px;width: 80%'></iframe>
      </a-flex>
    </a-flex>
  </div>
</template>
<script setup lang='ts'>
import { useReferenceStore } from '~/stores/reference/reference'

definePageMeta({
  layout: 'course',
})
const referenceStore = useReferenceStore()
await useAsyncData('get-reference', () => referenceStore.fetchMyCourse())
const reference = referenceStore.$state.reference
</script>
<style lang='scss' scoped>
.reference-page {
  margin: 0 10% 0 10%;
}

.reference-page-title {
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: $yellow;
  margin-top: 20px;
  margin-bottom: 20px;
}

.reference-title:hover {
  opacity: 0.5;
}
</style>