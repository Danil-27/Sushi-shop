<template>
  <div class="menu" :class="{ open: isMenu }">
    <div class="menu__wrapper">
      <h2 class="menu__heading">Меню</h2>
      <NavBar ref="navBarElem" :links="links" />
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt facere
      autem sint, atque possimus sed vitae esse explicabo excepturi quia
      officiis provident totam a ut ratione saepe quaerat accusantium deleniti
      omnis consectetur, voluptatem qui alias necessitatibus maiores!
      Consequatur, expedita alias dolores vitae sint sunt minus cumque obcaecati
      quidem? Quod cumque, molestiae laboriosam enim quasi voluptates,
      exercitationem hic doloribus aliquam commodi totam vel aspernatur
      reprehenderit ut eveniet pariatur numquam sunt, excepturi animi.
      Voluptatum fuga at accusantium sed temporibus, perferendis commodi aliquid
      rerum ducimus adipisci cupiditate quia? Ex dignissimos possimus totam!
      Recusandae eligendi saepe eos veniam quam explicabo eius necessitatibus
      dolorem repellendus?
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
