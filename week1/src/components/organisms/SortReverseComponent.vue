<template>
  <div class="controls">
    <button class="controls__button" @click="emit('sort')">Sắp xếp tăng dần</button>
    <button class="controls__button" @click="emit('reverse')">Đảo ngược</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['sort', 'reverse']);
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_sort-reverse.scss" as *;
</style>
