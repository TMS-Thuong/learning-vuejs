<template>
  <div class="register-page">
    <div class="register-form">
      <h1>Đăng Ký Tài Khoản</h1>

      <div class="register-form__group">
        <label>Họ và tên:</label>
        <BaseInput v-model="form.fullName" />
      </div>

      <div class="register-form__group">
        <label>Email:</label>
        <BaseInput v-model="form.email" type="email" />
      </div>

      <div class="register-form__group">
        <label>Mật khẩu:</label>
        <BaseInput v-model="form.password" type="password" />
      </div>

      <div class="register-form__group">
        <label>Ngày sinh:</label>
        <BaseInput v-model="form.birthDate" type="date" />
      </div>

      <div class="register-form__group">
        <label>Địa chỉ:</label>
        <BaseTextarea v-model="form.address" />
      </div>

      <div class="register-form__group">
        <label>
          <BaseCheckbox v-model="form.acceptTerms" /> Đồng ý điều khoản
        </label>
      </div>

      <div>
        <label>Giới tính:</label>
        <BaseRadio v-model="form.gender" value="Nam" /> Nam
        <BaseRadio v-model="form.gender" value="Nữ" /> Nữ
        <BaseRadio v-model="form.gender" value="Khác" /> Khác
      </div>

      <div class="register-form__group">
        <label>Quốc gia:</label>
        <BaseSelect v-model="form.country">
          <option disabled value="">Chọn quốc gia</option>
          <option>Việt Nam</option>
          <option>Khác</option>
        </BaseSelect>
      </div>

      <button type="button" class="register-form__submit" @click="submit">Đăng ký</button>
      <h3 v-if="isSubmitted">Kết quả:</h3>
      <pre v-if="isSubmitted">{{ form }}</pre>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '../components/atoms/InputComponent.vue';
import BaseTextarea from '../components/atoms/TextareaComponent.vue';
import BaseCheckbox from '../components/atoms/CheckboxComponent.vue';
import BaseRadio from '../components/atoms/RadioComponent.vue';
import BaseSelect from '../components/atoms/SelectComponent.vue';

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  birthDate: '',
  address: '',
  acceptTerms: false,
  gender: '',
  country: ''
});

const isSubmitted = ref(false);
const submit = () => {
  isSubmitted.value = true;
  console.log("Form Submitted:", JSON.stringify(form, null, 2));
}
</script>

<style lang="scss" scoped>
@use "../assets/style/page/_register.scss" as *;
</style>
