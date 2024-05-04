<template>
  <ul class="nav">
    <li class="nav__item" v-for="link in links" :key="link.id">
      <a class="nav__link" :href="link.link">
        <img
          v-if="link.id === 5"
          class="nav__img"
          src="/src/assets/images/icons/tel.svg"
          alt="tel"
        />
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { myLink } from './modelsHeaderNavBar';
import { ref } from 'vue';

const links = ref<myLink[]>([
  { id: 1, name: 'Главная', link: '/eee22' },
  { id: 2, name: 'Доставка', link: '/eee22' },
  { id: 3, name: 'О нас', link: '/eee22' },
  { id: 4, name: 'Новости', link: '/eee22' },
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
