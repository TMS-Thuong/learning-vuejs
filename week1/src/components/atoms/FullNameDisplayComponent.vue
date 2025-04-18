<template>
  <p class="full-name-display">{{ fullName }}</p>
</template>

<script setup>
const props = defineProps({
  fullName: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_full-name-display.scss" as *;
</style>
