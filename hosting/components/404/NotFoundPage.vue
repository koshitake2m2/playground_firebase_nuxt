<template>
  <div class="not-found">
    <div class="message-contaiiner">
      <div class="title">404</div>
      <button @click="onClick">Go to Home</button>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: '404 Not Found',
  meta: [
    {
      name: 'description',
      content: 'お探しのページは見つかりませんでした',
    },
  ],
})
const onClick: () => void = () => {
  location.href = '/'
}
</script>
<style lang="scss" scoped>
.not-found {
  display: flex;
  justify-content: center;
}
.message-contaiiner {
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 600px;
  text-align: center;
}
.title {
  font-size: 100px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
