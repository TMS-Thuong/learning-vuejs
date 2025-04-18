<template>
  <div class="manage-user">
    <HelloUser :name="userName" />
  </div>
</template>

<script setup lang="ts">
import HelloUser from '../atoms/HelloUserComponent.vue'

const userName = 'An';
</script>

