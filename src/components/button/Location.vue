<template>
  <div class="place">
    <img src="src/assets/images/icons/place.svg" alt="" />
    <p class="place__text">Киев</p>
    <p class="place__text">RU</p>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.place {
  display: none;
  gap: 0px 5px;
}
@media screen and (min-width: 410px) {
  .place {
    display: flex;
  }
}
</style>
