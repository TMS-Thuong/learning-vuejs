<template>
  <div class="count-display">
    <p class="count-display__value">Count: {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps < { count: number } > ();
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_count-display.scss" as *;
</style>
