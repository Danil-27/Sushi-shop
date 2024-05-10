<template>
  <ul class="nav">
    <li v-for="link in links" :key="link.id" class="nav__item">
      <routerLink :to="link.link" class="nav__link">
        <img
          v-if="link.id === 5"
          class="nav__img"
          src="src/assets/images/icons/tel.svg"
          alt="tel"
        />
        {{ link.name }}
      </routerLink>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { myLink } from './type';
import { ref } from 'vue';

const links = ref<myLink[]>([
  { id: 1, name: 'Главная', link: '/Home' },
  { id: 2, name: 'Доставка', link: '/Delivery' },
  { id: 3, name: 'О нас', link: '/About' },
  { id: 4, name: 'Новости', link: '/News' },
  { id: 5, name: '+38 097 699 34 38', link: 'tel:+380976993438' },
]);
</script>

<style lang="scss" scoped>
.nav {
  display: none;
  align-items: center;
  &__img {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  &__item {
    display: flex;
    &:not(:last-child) {
      margin-right: 24px;
    }
    &:first-child {
      margin-left: 24px;
    }
  }
  &__link {
    color: $cvetnye-chernyy;
    &:last-child {
      display: flex;
      align-items: center;
    }
  }
}
@media screen and (min-width: 992px) {
  .nav {
    display: flex;
  }
}
</style>
