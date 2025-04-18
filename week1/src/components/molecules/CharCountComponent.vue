<template>
  <div class="char-count">
    <input v-model="message" type="text" class="char-count__input"/>
    <CharCountDisplayComponent :charCount="charCount" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CharCountDisplayComponent from '../atoms/CharCountDisplayComponent.vue';

const message = ref('');
const charCount = computed(() => message.value.length);
</script>

<style scoped lang="scss">
  @use "../../assets/styles/_char-count.scss" as *;
</style>
