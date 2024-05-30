<template>
  <div class="menu" :class="{ open: isMenu }">
    <div class="menu__wrapper">
      <h2 class="menu__heading">Меню</h2>
      <NavBar ref="navBarElem" :links="links" />
    </div>
  </div>

  <div class="die" :class="{ visible: isMenu }"></div>
</template>

<script lang="ts" setup>
import NavBar from 'src/components/navigation/NavBar.vue';
import { defineProps, ref } from 'vue';
import { myLink } from 'src/components/header/type';

const navBarElem = ref(null);
const links = ref<myLink[]>([
  { id: 1, name: 'Повторить прошлый заказ', link: '/Home' },
  { id: 2, name: 'Избранное', link: '/Delivery' },
  { id: 3, name: 'Профиль', link: '/About' },
  { id: 4, name: 'Главная', link: '/News' },
  { id: 5, name: 'Доставка', link: '/Delivery' },
  { id: 6, name: 'О нас', link: '/News' },
  { id: 7, name: 'Новости', link: '/News' },
]);

defineProps<{
  isMenu: boolean;
}>();
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: -100vh;
  right: 0;
  width: 100%;
  height: calc(100vh - 10px);
  padding: 18px;
  border-radius: 12px;
  overflow-y: auto;
  background-color: $section;
  z-index: $z-menu;
  transition: 1s;
  &__heading {
    font-family: $Inter-500;
    font-weight: 700;
    font-size: 24px;
    line-height: 125%;
    color: $cvetnye-chernyy;
  }
}

.menu.open {
  top: 0;
}

.die {
  position: absolute;
  right: 0;
  top: -4px;
  width: 0vw;
  height: 0vh;
  z-index: 9;
  background-color: rgba(26, 26, 26, 0.4);
  opacity: 0;
  transition: 1s opacity;
}
.die.visible {
  right: -8px;
  width: calc(100% + 16px);
  height: 100vh;
  opacity: 1;
}
</style>
