<template>
  <div class="burger" :class="{ active: isActive }" @click="toggleActive">
    <div class="burger__wrapper">
      <span class="burger__icon"></span>
      <span class="burger__icon"></span>
      <span class="burger__icon"></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let isActive = ref<boolean>(false);
function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped>
.burger {
  padding: 10px;
  background-color: $fon-fon-seryy;
  border-radius: 12px;
  z-index: 100;
  cursor: pointer;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px 0px;
    width: 20px;
    height: 20px;
    transition: 0.4s;
  }
}

.burger__icon {
  width: 100%;
  height: 2px;
  background-color: #252424;
  transition: 0.4s;
}

.burger.active .burger__icon:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.burger.active .burger__icon:nth-child(2) {
  opacity: 0;
}

.burger.active .burger__icon:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

@media screen and (min-width: 992px) {
  .burger {
    display: none;
    padding: 16px;
  }
}
</style>
