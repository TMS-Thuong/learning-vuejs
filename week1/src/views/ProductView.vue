<template>
  <div id="app" class="app">
    <h1 class="app__title">List Product</h1>
    <ProductList :products="products" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductList from "../components/molecules/ProductListComponent.vue";

const products = ref([
  { id: 1, name: "Laptop" },
  { id: 2, name: "Điện thoại" },
  { id: 3, name: "Máy tính bảng" }
]);
</script>
