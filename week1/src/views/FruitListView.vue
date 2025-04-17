<template>
  <div class="fruit-list-view">
    <h1 class="fruit-list-title">Fruit List</h1>
    <FruitList :fruits="fruits" />
  </div>
</template>

<script setup>
import FruitList from '@/components/molecules/FruitListComponent.vue';
import { ref } from 'vue';

const fruits = ref(["Táo", "Cam", "Nho", "Mận"]);
</script>
