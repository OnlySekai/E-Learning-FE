<template>
  <iframe allow="autoplay" :src="newSrc"></iframe>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
}>()
const splitUrl = props.src.split('/')
const dIndex = splitUrl.findIndex((path) => path === 'd')
const newUrl = splitUrl.slice(0, dIndex + 2)
newUrl.push('preview')
const newSrc = newUrl.join('/')
</script>

<style scoped lang="scss">
iframe {
  min-width: 100%;
  min-height: 100%;
  border: none;
}
</style>