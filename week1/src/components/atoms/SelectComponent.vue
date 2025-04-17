<template>
  <select class="base-select" :value="modelValue" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String
});
</script>

