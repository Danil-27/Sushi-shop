<template>
  <div class="header-button">
    <div
      v-for="srcBtn in sourceButtons"
      :key="srcBtn.id"
      class="header-button__item"
    >
      <span v-if="srcBtn.id === 4" class="header-button__text">Корзина</span>
      <img class="header-button__img" :src="srcBtn.link" :alt="srcBtn.alt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { sourceButtonHeader } from './type';

const sourceButtons = ref<sourceButtonHeader[]>([
  { id: 1, link: 'src/assets/images/icons/bell.svg', alt: 'bell' },
  { id: 2, link: 'src/assets/images/icons/heart.svg', alt: 'heart' },
  { id: 3, link: 'src/assets/images/icons/login.svg', alt: 'login' },
  { id: 4, link: 'src/assets/images/icons/basket.svg', alt: 'basket' },
]);
</script>

<style lang="scss" scoped>
.header-button {
  display: flex;
  gap: 0px 4px;
  &__item {
    display: flex;
    align-items: center;
    border: 1px solid $razdelitel-razdelitel-1;

    border-radius: 12px;
    padding: 10px;
    &:last-child {
      display: none;
      span {
        display: none;
      }
    }
  }
  &__img {
    width: 20px;
    height: 20px;
  }
  &__text {
    margin-right: 8px;
    color: $tekst-seryy-1;
  }
}

@media screen and (min-width: 992px) {
  .header-button {
    &__item {
      padding: 16px;
      &:last-child {
        display: flex;
      }
    }
  }
}
@media screen and (min-width: 1020px) {
  .header-button {
    gap: 0px 12px;
  }
}
@media screen and (min-width: 1270px) {
  .header-button {
    &__item {
      &:last-child {
        span {
          display: block;
        }
      }
    }
  }
}
</style>
