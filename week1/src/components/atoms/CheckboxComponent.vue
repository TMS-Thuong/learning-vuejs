<template>
  <label class="base-checkbox">
    <input type="checkbox" :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});
</script>
