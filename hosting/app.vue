<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { environments } from './envs/envs'

const baseUrl = environments.baseUrl
const ogImage = `${baseUrl}/ogp.png`

const router = useRouter()
const ogUrl = computed(() => `${baseUrl}${router.currentRoute.value.path}`)

useHead({
  meta: [
    {
      property: 'og:url',
      content: ogUrl,
    },
    {
      property: 'og:image',
      content: ogImage,
    },
  ],
})
</script>
<style scoped lang="scss"></style>
