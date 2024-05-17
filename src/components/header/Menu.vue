<template>
  <div class="menu" :class="{ open: isMenu, closed: !isMenu }">
    <div class="menu__wrapper">
      <h2 class="menu__heading">Меню</h2>
      <NavBar ref="navBarElem" :links="links" />
    </div>
  </div>
  <div class="die" :class="{ visible: isMenu, inVisible: !isMenu }"></div>
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
  right: 50%;
  transform: translateX(50%);
  top: 0%;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  padding: 18px;
  border-radius: 12px;
  z-index: 10;
  transition: 1s;
  background-color: $section;
  overflow-y: scroll;
  &__wrapper {
  }
  &__heading {
    font-family: $Inter-500;
    font-weight: 700;
    font-size: 24px;
    line-height: 125%;
    color: $cvetnye-chernyy;
  }
}

.menu.open {
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.menu.closed {
  top: -100%;
}

.die {
  position: absolute;
  right: 0;
  top: 0;
  width: 0%;
  height: 0%;
  z-index: 9;
  background-color: rgba(26, 26, 26, 0.4);
  transition: 1s opacity;
  opacity: 0;
}
.die.visible {
  width: 100%;
  height: 100%;
  opacity: 1;
}
.die.isVisible {
  opacity: 0;
}
</style>
