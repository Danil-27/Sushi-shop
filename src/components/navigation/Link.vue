<template>
  <li v-for="link in links" :key="link.id" class="navBar__item">
    <router-link class="navBar__link" :to="link.link">
      {{ link.name }}
    </router-link>
  </li>
</template>
<script lang="ts" setup>
import { myLink } from 'src/components/header/type';
import { defineProps } from 'vue';

defineProps<{
  links: myLink[];
}>();
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
