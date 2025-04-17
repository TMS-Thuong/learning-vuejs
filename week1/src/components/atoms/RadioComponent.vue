<template>
  <label class="base-radio">
    <input type="radio" :value="value" :checked="modelValue === value" @change="$emit('update:modelValue', value)" />
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | number
  value: string | number
}>();

defineEmits<{
  'update:modelValue': [value: string | number]
}>();
</script>
