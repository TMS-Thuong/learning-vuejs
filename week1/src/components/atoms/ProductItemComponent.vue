<template>
  <li class="product-item">
    {{ product.name }}
  </li>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_product-item.scss" as *;
</style>
