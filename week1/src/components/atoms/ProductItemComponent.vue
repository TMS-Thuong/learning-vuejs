<template>
  <li class="product-item">
    {{ product.name }}
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_productItem.scss" as *;
</style>
