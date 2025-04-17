<template>
  <li class="product-item">
    <div class="product-item__name">Tên sản phẩm: {{ product.name }}</div>
    <div class="product-item__details">
      <span class="product-item__price">Giá: {{ product.price }} VND</span>
      <span class="product-item__quantity">Số lượng: {{ product.quantity }}</span>
      <span class="product-item__total">Tổng cộng: {{ product.price * product.quantity }} VND</span>
    </div>
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
@use "../../assets/styles/_merchandiseItem.scss" as *;
</style>
