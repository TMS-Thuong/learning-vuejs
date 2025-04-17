<template>
  <div class="class-text">
    <p :class="{ 'class-text__red': isRed }">
      Xin chào Vue 3!
    </p>
    <button @click="textColor" class="class-text__button">
      Đổi màu
    </button>

    <div class="class-text__box" :style="{ backgroundColor: bgColor }"></div>
    <label for="bg-color-picker" class="class-text__label">màu nền</label>
    <input id="bg-color-picker" type="color" v-model="bgColor" class="class-text__color-picker" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const isRed = ref(false)
  const textColor = () => {
    isRed.value = !isRed.value
  }
  const bgColor = ref('#288628')
</script>

<style lang="scss" scoped>
  @use "../../assets/style/page/_classText.scss" as *;
</style>
