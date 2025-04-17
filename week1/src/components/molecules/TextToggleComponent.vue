<template>
  <div class="toggle-text-box">
    <label class="toggle-text-box__label">
      <input type="checkbox" v-model="isVisible" />
      Hello
    </label>

    <p class="toggle-text-box__content" v-show="isVisible">
      Thương đây nha
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<style lang="scss">
@use "../../assets/styles/_toggleTextBox.scss" as *;
</style>
