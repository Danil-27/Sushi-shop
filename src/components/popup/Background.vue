<template>
  <div class="background" @click="handleClick"></div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{
  parentRemoveСlassNoScroll: () => void;
  idBtn: number | null;
}>();

const emit = defineEmits<{
  (event: 'update:idBtn', value: number | null): void;
}>();

function handleClick() {
  props.parentRemoveСlassNoScroll();
  emit('update:idBtn', null);
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.background {
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: $z-order;
  background-color: rgba(26, 26, 26, 0.4);
}
</style>
