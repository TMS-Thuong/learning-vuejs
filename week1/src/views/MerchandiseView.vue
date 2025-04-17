<template>
  <div id="app" class="app">
    <h1 class="app__title">Danh sách sản phẩm</h1>
    <ProductList :products="products" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductList from '../components/molecules/MerchandiseComponent.vue';

const products = ref([
  { id: 1, name: "Laptop", price: 15000000, quantity: 2 },
  { id: 2, name: "Điện thoại", price: 10000000, quantity: 3 },
  { id: 3, name: "Máy tính bảng", price: 8000000, quantity: 1 },
]);
</script>

