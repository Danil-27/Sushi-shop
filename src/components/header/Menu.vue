<template>
  <div class="menu" :class="{ open: isMenu }">
    <div class="menu__wrapper">
      <h2 class="menu__heading"></h2>
      <NavBar :links="links" @click="clickLimkMenu" />
    </div>
    <div></div>
  </div>

  <div class="die" :class="{ visible: isMenu }"></div>
</template>

<script lang="ts" setup>
import NavBar from 'src/components/navigation/NavBar.vue';
import { defineProps, defineEmits, ref } from 'vue';
import { myLink } from 'src/components/header/type';

const links = ref<myLink[]>([
  { id: 1, name: 'Повторить прошлый заказ', link: '/Home' },
  { id: 2, name: 'Избранное', link: '/Delivery' },
  { id: 3, name: 'Профиль', link: '/About' },
  { id: 4, name: 'Главная', link: '/home' },
  { id: 5, name: 'Доставка', link: '/Delivery' },
  { id: 6, name: 'О нас', link: '/About' },
  { id: 7, name: 'Новости', link: '/News' },
]);

const props = defineProps<{
  isMenu: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:isMenu', value: boolean): void;
}>();

function clickLimkMenu(event: Event): void {
  const menu = event.target as HTMLElement;
  if (menu.closest('.navBar__link')) {
    emit('update:isMenu', !props.isMenu);
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: -100vh;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: hidden;
  width: calc(100% - 8px);
  height: calc(100vh - 8px);
  margin-top: 4px;
  padding: 18px;
  border-radius: 12px;

  background-color: $section;
  z-index: $z-menu;
  transition: 1s ease;
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
  overflow-y: auto;
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
  transition: 1s ease opacity;
}
.die.visible {
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw + $scrollbarWidth);
  height: 100vh;
  opacity: 1;
}
</style>
