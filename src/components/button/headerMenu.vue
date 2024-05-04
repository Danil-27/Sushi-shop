<template>
  <div class="menu-btn" @click="toggleActive" :class="{ active: isActive }">
    <div class="menu-btn__wrapper">
      <span class="menu-btn__icon"></span>
      <span class="menu-btn__icon"></span>
      <span class="menu-btn__icon"></span>
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
.menu-btn {
  padding: 10px;
  background-color: $fon-fon-seryy;
  margin-left: 4px;
  border-radius: 12px;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px 0px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.4s;
  }
}

.menu-btn__icon {
  width: 100%;
  height: 2px;
  background-color: #252424;
  transition: 0.4s;
}

.menu-btn.active .menu-btn__icon:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.menu-btn.active .menu-btn__icon:nth-child(2) {
  opacity: 0;
}

.menu-btn.active .menu-btn__icon:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

@media screen and (min-width: 992px) {
  .menu-btn {
    display: none;
    padding: 16px;
    &__wrapper {
    }
    &__icon {
    }
  }
}
</style>
