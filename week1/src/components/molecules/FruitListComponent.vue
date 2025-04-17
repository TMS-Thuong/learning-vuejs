<template>
  <ul class="fruit-list">
    <FruitItem v-for="(fruit, index) in fruits" :key="index" :fruit="fruit" />
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import FruitItem from "../atoms/FruitItemComponent.vue";

const props = defineProps({
  fruits: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_fruitList.scss";
</style>
