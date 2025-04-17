<template>
  <ul class="task-list">
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @delete-task="handleDelete" />
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import TaskItem from "../atoms/TaskItem.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['delete-task']);

const handleDelete = (task) => {
  emit('delete-task', task);
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_taskList.scss" as *;
</style>
