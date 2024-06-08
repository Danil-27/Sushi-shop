<template>
  <div class="location">
    <img src="src/assets/images/icons/place.svg" alt="" />
    <p>Киев</p>
    <p>RU</p>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.location {
  color: $cvetnye-chernyy;
  display: none;
  gap: 0px 5px;
  cursor: pointer;
}
@media screen and (min-width: 410px) {
  .location {
    display: flex;
  }
}
@media screen and (max-width: 992px) {
  .location {
    margin-left: 18px;
  }
}
@media screen and (max-width: 740) {
  .location {
    margin-left: 0px;
  }
}
</style>
