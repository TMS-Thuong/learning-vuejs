<template>
  <ul class="number-list">
    <NumberItem v-for="(number, index) in numbers" :key="index" :number="number" />
  </ul>
</template>

<script setup>
import NumberItem from "../atoms/ListItemComponent.vue";

const props = defineProps({
  numbers: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
    @use "../../assets/styles/_listSort.scss" as *;
</style>
