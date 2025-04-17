<template>
  <div id="app" class="app">
    <h1 class="app__title">Quản lý Tasks</h1>
    <TaskInput @add-task="addTask" />
    <TaskList :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TaskInput from "../components/molecules/TaskInput.vue";
import TaskList from "../components/molecules/TaskList.vue";

const tasks = ref(["NodeJS", "Ruby", "VueJS"]);

const addTask = (newTask) => {
  tasks.value = [...tasks.value, newTask];
};

const deleteTask = (taskToDelete) => {
  tasks.value = tasks.value.filter(task => task !== taskToDelete);
};
</script>
