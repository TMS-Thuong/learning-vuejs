<template>
  <div class="button-container">
    <button class="button-container__button button-container__button--primary"
      :style="{ backgroundColor: buttonColor }">
      Test
    </button>
    <img class="button-container__image" v-bind:src="src" alt="Image" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const buttonColor = ref('black')
  const src = ref('https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg')
</script>

<style lang="scss" scoped>
@use "../../assets/style/page/_button.scss" as *;
</style>
