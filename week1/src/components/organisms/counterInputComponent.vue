<template>
  <div class="counter-input">
    <h1>Counter Input</h1>
    <p>Nhấn vào nút để tăng hoặc giảm số đếm. Nhập văn bản và nhấn Enter để hiển thị nội dung.</p>
    <div class="counter-input__counter">
      <button class="counter-input__counter-button" @click="counter--">Giảm</button>
      <span>{{ counter }}</span>
      <button class="counter-input__counter-button" @click="counter++">Tăng</button>
    </div>

    <div class="counter-input__input-section">
      <input class="counter-input__input-section-input" v-model="inputValue" @keyup.enter="submitInput"
        placeholder="Enter để hiển thị nội dung" />
      <p class="counter-input__input-section-text" v-if="submittedText">
        Nội dung đã nhập: {{ submittedText }}
      </p>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const counter = ref(0);
const inputValue = ref('');
const submittedText = ref('');

const submitInput = () => {
  submittedText.value = inputValue.value;
  inputValue.value = '';
};
</script>

<style lang="scss" scoped>
@use '../../assets/style/page/_counter-input.scss' as *;
</style>
