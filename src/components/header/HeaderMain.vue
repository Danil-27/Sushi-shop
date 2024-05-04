<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="logo"><LogoNinjaSushi /></div>
        <nav class="navBar">
          <PlaceButton class="navBar__place" /><headerNavBar />
        </nav>
        <div class="button"><headerButton /> <headerMenu /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoNinjaSushi from '../logo/NinjaSushi.vue';
import PlaceButton from '../button/PlaceButton.vue';
import headerButton from '../block/headerButton.vue';
import headerMenu from '../button/headerMenu.vue';
import headerNavBar from 'src/components/block/HeaderNavBar.vue';
</script>

<style scoped lang="scss">
.container {
  padding: 0 4px;
}

.header {
  display: flex;
  align-items: center;
  padding: 4px 4px 6px 4px;
  font-family: $Inter-Medium;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 8px 12px;
    box-shadow: 0 6px 20px 0 rgba(29, 29, 31, 0.07);
    background-color: $section;
    border-radius: 12px;
  }
}

.button,
.navBar {
  display: flex;
  align-items: center;
}

.navBar {
  flex-basis: 100%;
  margin-left: 14px;
}

@media screen and (min-width: 480px) {
  .navBar {
    margin-left: 70px;
  }
}
@media screen and (min-width: 992px) {
  .navBar {
    flex-basis: auto;
    margin-left: 0px;
  }
}
@media screen and (min-width: 992px) {
  .header {
    &__wrapper {
      min-height: 80px;
    }
  }
}
</style>
