<template>
  <div class="age">
    <form @submit.prevent="checkAge" class="age__form">
      <label for="age" class="age__label">Nhập tuổi của bạn</label>
      <input
        id="age"
        v-model.number="age"
        type="number"
        placeholder="Nhập tuổi"
        class="age__input"
      />
    </form>

    <p v-if="age && age < 18" class="age__text age__text--minor">
      Bạn là người chưa đủ tuổi.
    </p>
    <p v-else-if="age >= 18 && age <= 60" class="age__text age__text--adult">
      Bạn là người trưởng thành.
    </p>
    <p v-else-if="age > 60" class="age__text age__text--senior">
      Bạn là người cao tuổi.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref(null)

const checkAge = () => {
  if (!age.value || age.value <= 0) {
    alert('Vui lòng nhập tuổi hợp lệ!')
    age.value = null
  }
}
</script>

<style lang="scss" scoped>
    @use "../../assets/styles/_ageMessage.scss" as *;
</style>
