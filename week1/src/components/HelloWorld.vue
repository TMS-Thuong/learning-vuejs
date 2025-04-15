<template>
  <div class="hello-world">
    <h1 class="hello-world__title">Hello World!</h1>
  </div>

</template>

<script setup>
</script>

<style lang="scss">
@use "../assets/_variables.scss" as *;

.hello-world {
  background-color: $bgColor;
  color: $bgBody;

  &__title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
