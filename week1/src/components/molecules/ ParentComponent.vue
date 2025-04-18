<template>
  <div class="parent">
    <ChildComponent :message="message" @sendMessage="onSendMessage" />
  </div>
</template>

<script setup lang="ts">
import ChildComponent from '../atoms/ChildComponent.vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['sendMessage']);

const onSendMessage = (newMsg: string) => {
  emit('sendMessage', newMsg);
}
</script>

