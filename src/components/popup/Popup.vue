<template>
  <div
    class="popup"
    :class="{ activePopup: idBtn !== null }"
    @click="handleClick"
  >
    <component :is="idBtn === 4 ? Basket : Order" />
    <div class="popup__wrapper" @click.stop>
      <div class="popup__close" @click="handleClick">close</div>
      <div>popup {{ idBtn }}</div>
      <div class="popup__add" @click="handleClick">добавить товар</div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Basket from 'src/pages/Basket.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Order from 'src/pages/Order.vue';
import { defineProps, defineEmits } from 'vue';

defineProps<{
  idBtn: number | null;
}>();

const emit = defineEmits<{
  (event: 'update:idBtn', value: number | null): void;
}>();

function handleClick() {
  document.body.classList.toggle('no-scroll');
  emit('update:idBtn', null);
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 92px;
  transform: translateX(1000vw);
  width: 100%;
  margin: 0 auto;
  z-index: 5;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  &__wrapper {
    position: absolute;
    width: 590px;
    height: calc(100vh - 150px);
    padding: 30px;
    border-radius: 12px;
    overflow-y: hidden;
    margin-right: calc(4px + $scrollbarWidth);
    background-color: $white;
  }
}

@media screen and (min-width: 992px) {
  .popup {
    transform: translateX(100vw);
    transition-property: right;
    transition: 0.4s ease;
  }
}

.activePopup {
  transform: translateX(0vw);
  .popup__wrapper {
    overflow-y: auto;
  }
}

.popup .popup__close {
  color: aliceblue;
  background-color: rgb(213, 75, 75);
}

.popup__add {
  color: aliceblue;
  background-color: rgb(54, 195, 68);
}

@media screen and (min-width: 1576px) {
  .popup {
    max-width: 1576px;
    padding: 0;
    .popup__wrapper {
      margin-right: 0;
    }
  }
}
</style>
