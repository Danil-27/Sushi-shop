<template>
  <nav class="navBar">
    <ul class="navBar__menu">
      <Link :links="links" />
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import Link from './Link.vue';
import { myLink } from 'src/components/header/type';
import { defineProps } from 'vue';

defineProps<{
  links: myLink[];
}>();
</script>

<style lang="scss" scoped></style>
