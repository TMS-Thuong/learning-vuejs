<template>
  <li class="task-item">
    <span class="task-item__name">{{ task }}</span>
    <button class="task-item__delete" @click="deleteTask">Xóa</button>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      type: String,
      required: true,
    },
  },
  emits: ["delete-task"],
  methods: {
    deleteTask() {
      this.$emit("delete-task", this.task);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_taskItem.scss" as *;
</style>
