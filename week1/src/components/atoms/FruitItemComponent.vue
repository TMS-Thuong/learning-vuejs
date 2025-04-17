<template>
  <li class="fruit-item">{{ fruit }}</li>
</template>

<script setup>
const props = defineProps({
  fruit: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_fruit-item.scss" as *;
</style>
