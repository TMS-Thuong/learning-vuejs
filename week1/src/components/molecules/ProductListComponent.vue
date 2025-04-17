<template>
  <ul class="product-list">
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script setup>
import ProductItem from "../atoms/ProductItemComponent.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_product-list.scss";
</style>
