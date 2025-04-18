<template>
  <div class="grandparent">
    <h2 class="grandparent__title">Grand Parent</h2>
    <ParentComponent :message="initialMessage" @sendMessage="onReceiveMessage" />
    <p class="grandparent__log">Received from Child: {{ receivedMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ParentComponent from '../molecules/ ParentComponent.vue';

const initialMessage = 'Hello mọi người';
const receivedMessage = ref('');

const onReceiveMessage = (msg: string) => {
  receivedMessage.value = msg;
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_grandparent.scss' as *;
</style>
