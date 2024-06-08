<template>
  <NavBar :links="FooterLinks" class="navBar" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { myLink } from './type';

import NavBar from 'src/components/navigation/NavBar.vue';

const FooterLinks = ref<myLink[]>([
  { id: 1, name: 'Главная', link: '/Home' },
  { id: 2, name: 'Меню', link: '/Menu' },
  { id: 3, name: 'Доставка', link: '/Delivery' },
  { id: 4, name: 'Вакансии', link: '/Vacancies' },
  { id: 5, name: 'Новости', link: '/News' },
]);
</script>

<style lang="scss" scoped>
.navBar :deep(.navBar__item) {
  text-align: center;
}
</style>
