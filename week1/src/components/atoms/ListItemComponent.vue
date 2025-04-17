<template>
  <li class="number-item">
    {{ number }}
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  number: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss" scoped>
  @use "../../assets/styles/_listItem.scss" as *;
</style>
