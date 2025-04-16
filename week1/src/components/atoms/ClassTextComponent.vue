<template>
  <div class="class-text">
    <p :class="{ 'class-text__red': isRed }">
      Xin chào Vue 3!
    </p>
    <button @click="color" class="class-text__button">
      Đổi màu
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const isRed = ref(false)
  const color = () => {
    isRed.value = !isRed.value
  }
</script>


<style lang="scss" scoped>
  @use "../../assets/style/page/_classText.scss" as *;
</style>
