<template>
  <textarea class="base-textarea" :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"></textarea>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String
});
</script>

