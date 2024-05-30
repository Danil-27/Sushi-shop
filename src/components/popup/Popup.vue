<template>
  <div
    class="popup"
    :class="{ activePopup: idBtn !== null }"
    @click="handleClick"
  >
    <component :is="idBtn === 4 ? Basket : Order" />
    <div class="popup__wrapper" @click.stop>
      <div class="popup__close" @click="handleClick">close</div>
      <div>popup {{ props.idBtn }} {{ props.isPopup }}</div>
      <div class="popup__add" @click="handleClick">добавить товар</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Basket from 'src/pages/Basket.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Order from 'src/pages/Order.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  isPopup: boolean;
  idBtn: number | null;
}>();

const emit = defineEmits<{
  (event: 'update:isPopup', value: boolean): void;
}>();

function handleClick() {
  document.body.classList.toggle('no-scroll');
  emit('update:isPopup', !props.isPopup);
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 100px;
  transform: translateX(110vw);
  width: 100%;
  margin: 0 auto;
  z-index: 5;
  transition-property: right;
  transition: 0.4s;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
}

.popup__wrapper {
  position: absolute;
  width: 590px;
  height: 70vh;
  margin-right: 7px;
  background-color: $white;
}

.popup__close {
  margin: 10px;
  color: aliceblue;
  background-color: rgb(213, 75, 75);
}
.popup__add {
  margin: 10px;
  color: aliceblue;
  background-color: rgb(54, 195, 68);
}

.activePopup {
  transform: translateX(0vw);
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
