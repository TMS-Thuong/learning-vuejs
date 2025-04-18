<template>
  <div class="parent-counter">
    <h2 class="parent-counter__title">Parent Counter</h2>
    <ChildCounter :start="startValue" @updateCount="onUpdateCount" />
    <p class="parent-counter__result">Current Count: {{ currentCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildCounter from '../atoms/ChildCounterComponent.vue';

const startValue = 5;
const currentCount = ref(startValue);

const onUpdateCount = (newCount: number) => {
  currentCount.value = newCount;
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_parent-counter.scss" as *;
</style>
