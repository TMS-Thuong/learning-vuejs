<template>
  <div class="child-counter">
    <p class="child-counter__value"> Count: {{ count }}</p>
    <button class="child-counter__btn" @click="onIncrease">Increase</button>
    <button class="child-counter__btn" @click="onDecrease">Decrease</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  start: {
    type: Number,
    required: true,
    default: 0
  }
});
const emit = defineEmits(['updateCount']);
const count = ref(props.start);

const onIncrease = () => {
  count.value++;
  emit('updateCount', count.value);
}

const onDecrease = () => {
  count.value--;
  emit('updateCount', count.value);
}
</script>


<style lang="scss" scoped>
@use "../../assets/styles/_child-counter.scss" as *;
</style>
