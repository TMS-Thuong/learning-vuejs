<template>
  <div class="child">
    <p class="child__message">Message from Parent: {{ message }}</p>
    <input v-model="newMessage" class="child__input" type="text" placeholder="Type your message here..." />
    <button class="child__btn" @click="onSend">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['sendMessage']);

const newMessage = ref('');

const onSend = () => {
  emit('sendMessage', newMessage.value);
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_child.scss' as *;
</style>
