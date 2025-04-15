<template>
  <input :id="id" class="base-input" :type="type" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" v-bind="$attrs" />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => {
      return ['text', 'password', 'email', 'number'].includes(value);
    }
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
});
</script>
