<template>
  <div class="LocationPopup" :class="{ openLocation: !isLocation }">
    <div class="LocationPopup__wrapper">
      <div class="LocationPopup__text"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  isLocation: boolean;
}>();
</script>

<style lang="scss" scoped>
.LocationPopup {
  position: absolute;
  top: 88px;
  transform: translateX(-35%) scale(1);
  opacity: 1;
  padding: 20px;
  width: 238px;
  height: 358px;
  border-radius: 12px;
  background-color: $white;
  transition: opacity 0.7s ease, transform 0.7s ease;
  &__wrapper {
    overflow-y: auto;
  }
  &__text {
    font-size: 25px;
  }
}

.openLocation {
  transform: translateX(-35%) scale(0);
  opacity: 0;
}
</style>
