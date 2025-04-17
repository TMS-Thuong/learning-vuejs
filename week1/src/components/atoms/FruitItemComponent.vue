<template>
  <li class="fruit-item">{{ fruit }}</li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  fruit: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_fruitItem.scss" as *;
</style>
