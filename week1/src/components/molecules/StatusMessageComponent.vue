<template>
  <div class="status-message">
    <p v-if="status === 'loading'" class="status-message__text status-message__text--loading">
      Đang tải dữ liệu...
    </p>
    <p v-else-if="status === 'success'" class="status-message__text status-message__text--success">
      Dữ liệu đã sẵn sàng!
    </p>
    <p v-else class="status-message__text status-message__text--error">
      Đã xảy ra lỗi!
    </p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // const status = ref('success')
  // const status = ref('loading')
  const status = ref('error')
</script>

<style lang="scss" scoped>
    @use "../../assets/styles/_statusMessage.scss" as *;
</style>
