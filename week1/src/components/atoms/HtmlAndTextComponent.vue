<template>
  <div class="html-text-demo">
    <div class="html-text-demo__content" v-html="rawHtml"></div>
    <p class="html-text-demo__text" v-text="plainText"></p>
  </div>
</template>

<script setup>
const rawHtml = '<strong>Hello</strong>'
const plainText = 'Đây là page của Thương nha'
</script>

<style lang="scss" scoped>
@use "../../assets/style/page/_htmlTextDemo.scss" as *;
</style>
