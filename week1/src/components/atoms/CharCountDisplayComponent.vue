<template>
  <div class="char-count-display">
    Số ký tự: {{ charCount }}
  </div>
</template>

<script setup>
defineProps({
  charCount: {
    type: Number,
    required: true
  }
});
</script>

<style scoped lang="scss">
  @use "../../assets/styles/_char-count-display.scss" as *;
</style>
