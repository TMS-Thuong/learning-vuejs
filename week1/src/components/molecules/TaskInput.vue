<template>
  <div class="task-input">
    <input v-model="newTask" class="task-input__field" type="text" />
    <button class="task-input__add" @click="addTask">Thêm</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-task']);
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    emit('add-task', newTask.value.trim());
    newTask.value = "";
  }
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_taskInput.scss" as *;
</style>
