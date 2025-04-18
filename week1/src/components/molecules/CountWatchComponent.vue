<template>
  <div class="counter">
    <button class="counter__btn" @click="onIncrement">Tăng</button>
    <CountDisplayComponent :count="count" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CountDisplayComponent from '../atoms/CountDisplayComponent.vue';

const count = ref(0);

watch(count, (newVal) => {
  console.log('Giá trị mới:' + newVal);
});

const onIncrement = () => { count.value++; };

</script>

<style lang="scss" scoped>
@use "../../assets/styles/_count-watch.scss" as *;
</style>
