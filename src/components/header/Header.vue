<template>
  <div class="header">
    <transition>
      <Background
        v-show="idBtn !== null"
        :idBtn="idBtn"
        :parentRemoveСlassNoScroll="removeСlassNoScroll"
        @update:idBtn="updateIdBtn"
      />
    </transition>

    <div id="container" class="container">
      <Popup
        v-if="screenWidth > 992"
        :idBtn="idBtn"
        @update:idBtn="updateIdBtn"
      />
      <div class="header__wrapper">
        <div class="logo"><Logo /></div>
        <nav class="nav">
          <Location />
          <NavBar :links="links" />
        </nav>
        <div class="button">
          <button
            v-if="screenWidth > 992"
            id="1"
            :class="{ isActive: 1 === idBtn }"
            class="button__item"
            @click="buttonClick"
          >
            <div v-if="buttonCounter == 1" class="button__counter">
              {{ buttonCounter }}
            </div>
            <Notices />
          </button>
          <router-link v-else to="/Notices">
            <button
              id="1"
              :class="{ isActive: 1 === idBtn }"
              class="button__item"
            >
              <div v-if="buttonCounter == 1" class="button__counter">
                {{ buttonCounter }}
              </div>

              <Notices />
            </button>
          </router-link>
          <button
            v-if="screenWidth > 992"
            id="2"
            :class="{ isActive: 2 === idBtn }"
            class="button__item"
            @click="buttonClick"
          >
            <Liked />
          </button>
          <router-link v-else to="/Liked">
            <button
              id="2"
              :class="{ isActive: 2 === idBtn }"
              class="button__item"
            >
              <Liked />
            </button>
          </router-link>
          <button
            v-if="screenWidth > 992"
            id="3"
            :class="{ isActive: 3 === idBtn }"
            class="button__item"
            @click="buttonClick"
          >
            <MyPage />
          </button>
          <router-link v-else to="/MyPage">
            <button
              id="3"
              :class="{ isActive: 3 === idBtn }"
              class="button__item"
            >
              <MyPage />
            </button>
          </router-link>
          <button
            v-if="screenWidth > 992"
            id="4"
            :class="{ isActive: 4 === idBtn }"
            class="button__item button_basket"
            @click="buttonClick"
          >
            <span class="button__text">Корзина</span>
            <Basket />
          </button>
          <router-link v-else to="/Basket">
            <button
              id="4"
              :class="{ isActive: 4 === idBtn }"
              class="button__item button_basket"
            >
              <span class="button__text">Корзина</span>
              <Basket />
            </button>
          </router-link>
          <Menu v-if="screenWidth < 992" :isMenu="isMenu" />
          <Burger :isMenu="isMenu" @click="toggleMenu" />
        </div>
      </div>
    </div>
    <div class="Var">
      <div>Resizedwatch : {{ screenWidth }}</div>
      <div>id-Btn :{{ idBtn }}</div>
      <div>is Menu :{{ isMenu }}</div>
      <div>is NoScroll :{{ isContainsNoScroll }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  myLink,
  widthWindow,
  Logo,
  NavBar,
  Location,
  Burger,
  Menu,
  Popup,
  Background,
  Basket,
  MyPage,
  Liked,
  Notices,
} from 'src/components/header/index';

let buttonCounter = ref<number>(1);
let isMenu = ref<boolean>(false);
let idBtn = ref<number | null>(null);
let screenWidth = ref<number>(widthWindow.value);
let isContainsNoScroll = ref<boolean>(
  document.body.classList.contains('no-scroll')
);

const links = ref<myLink[]>([
  { id: 1, name: 'Главная', link: '/Home' },
  { id: 2, name: 'Доставка', link: '/Delivery' },
  { id: 3, name: 'О нас', link: '/About' },
  { id: 4, name: 'Новости', link: '/News' },
]);

watch(widthWindow, (newValue) => {
  screenWidth.value = newValue;
  idBtn.value = null;
  isMenu.value = false;
  removeСlassNoScroll();
});

function updateIdBtn(value: number | null) {
  idBtn.value = value;
}

function updateIsContainsNoScroll() {
  isContainsNoScroll.value = document.body.classList.contains('no-scroll');
}

function removeСlassNoScroll() {
  if (isContainsNoScroll.value) {
    document.body.classList.remove('no-scroll');
    updateIsContainsNoScroll();
  }
}

function addСlassNoScroll() {
  if (!isContainsNoScroll.value) {
    document.body.classList.add('no-scroll');
    updateIsContainsNoScroll();
  }
}

function toggleMenu() {
  (isMenu.value = !isMenu.value) ? addСlassNoScroll() : removeСlassNoScroll();
}

function buttonClick(event: Event) {
  const target = event.currentTarget as HTMLElement;
  const clickedElementId = target.id;
  idBtn.value = +clickedElementId;
  if (!isContainsNoScroll.value) {
    addСlassNoScroll();
  }
}
</script>

<style scoped lang="scss">
// --------------------------------------------------------------------
.Var {
  position: fixed;
  top: 50%;
  background-color: black;
  color: white;
  padding: 8px;
  z-index: 100000;
}
// --------------------------------------------------------------------
.container {
  padding: 0px 0px;
}

.header {
  position: relative;
  z-index: $z-header;
  padding: 4px 4px 6px 4px;
  font-family: $Inter-500;
  &__wrapper {
    position: relative;
    z-index: $z-header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    min-height: 56px;
    padding: 8px 12px;
    box-shadow: 0 6px 20px 0 rgba(29, 29, 31, 0.07);
    background-color: $section;
    border-radius: 12px;
  }
}

.nav {
  display: flex;
  align-items: center;
  flex-basis: auto;
  gap: 0 24px;
}

.navBar {
  display: none;
}

.navBar :deep(.navBar__menu) {
  display: flex;
  gap: 0 24px;
  .navBar__link {
    padding-top: 16px;
    padding-bottom: 16px;
    font-family: $Inter-500;
    color: $cvetnye-chernyy;
    cursor: pointer;
  }
}

.button {
  display: flex;
  align-items: center;
  gap: 0px 4px;
  &__item {
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid $razdelitel-razdelitel-1;
    border-radius: 12px;
    padding: 10px;
    transition: 0.4s ease;
    &:hover {
      background-color: $akcentnyy-akcentnyy-2;
      .button__text {
        color: $white;
      }
    }
    &:nth-child(1) {
      position: relative;
    }
  }
  &__item.isActive {
    background-color: $akcentnyy-akcentnyy-2;
    .button__text {
      color: $white;
    }
  }
  &__counter {
    position: absolute;
    right: -4px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: $akcentnyy-akcentnyy-2;
    border: 1px solid $white;
    border-radius: 50%;
    font-size: 12px;
    color: $white;
  }
  &__text,
  &_basket {
    display: none;
  }
  &__text {
    transition: 0.4s ease;
    margin-right: 8px;
    font-family: $Inter-400;
    color: $tekst-seryy-1;
  }
}

@media screen and (min-width: 740px) {
  .nav {
    flex-basis: 100%;
  }
}

@media screen and (min-width: 992px) {
  .header {
    &__wrapper {
      min-height: 80px;
    }
  }

  .nav {
    flex-basis: auto;
  }

  .navBar {
    display: flex;
  }

  .button {
    &__item {
      padding: 16px;
    }
    &_basket {
      display: flex;
    }
  }
}

@media screen and (min-width: 1020px) {
  .button {
    gap: 0px 12px;
    &__counter {
      right: -10px;
    }
  }
}

@media screen and (min-width: 1090px) {
  .button {
    &__text {
      display: block;
    }
  }
}

@media screen and (min-width: 1200px) {
  .nav {
    gap: 0 48px;
  }
  .navBar :deep(.navBar__menu) {
    display: flex;
    gap: 0 48px;
  }
}
</style>
