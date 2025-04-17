<template>
  <div id="app" class="app">
    <h1 class="app__title">Danh sách</h1>
    <ListSort :numbers="numbers" />
    <SortAndReverse @sort="sort" @reverse="reverse" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListSort from "../components/molecules/ListSortComponent.vue";
import SortAndReverse from "../components/organisms/SortReverseComponent.vue";

const numbers = ref([3, 1, 4, 2]);

const sort = () => {
  numbers.value = [...numbers.value].sort((a, b) => a - b);
};

const reverse = () => {
  numbers.value = [...numbers.value].reverse();
};

</script>

