<template>
  <div class="hello-user">
    Xin chào, {{ name }}!
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style scoped lang="scss">
.hello-user {
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
}
</style>
