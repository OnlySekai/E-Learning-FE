<script lang="ts" setup>


import {toNumber} from "@vue/shared";

const page = ref(1)
const { data: posts } = await useAsyncData(
    'posts',
    () => $fetch('https://raw.githubusercontent.com/nvcuong96/testapi/main/questions.sample.json'),
)
const route = useRoute()
const quId= toNumber(route.params.id)
const router = useRouter()
const clicks=(quId)=>{
  quId++;
     router.push(`/tes/${quId}`)
}
const data=JSON.parse(posts.value)



</script>
<template>
  <div>
    <h1>{{data.questions[quId-1]}}</h1>
    <button @click="clicks(quId)">{{`chuyen nut`}}</button>
    <p>{{quId}}</p>
  </div>
</template>