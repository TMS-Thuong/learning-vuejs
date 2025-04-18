<template>
  <div class="full-name">
    <div class="full-name__group">
      <label class="full-name__label">First Name: </label>
      <input v-model="firstName" type="text" class="full-name__input" placeholder="Nhập First Name" />
    </div>

    <div class="full-name__group">
      <label class="full-name__label">Last Name: </label>
      <input v-model="lastName" type="text" class="full-name__input" placeholder="Nhập Last Name" />
    </div>

    <FullNameDisplayComponent :fullName="fullName" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FullNameDisplayComponent from '../atoms/FullNameDisplayComponent.vue';

const firstName = ref('');
const lastName = ref('');
const fullName = computed(() => firstName.value + ' ' + lastName.value);
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_full-name.scss" as *;
</style>
