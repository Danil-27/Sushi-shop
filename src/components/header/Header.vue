<template>
  <div class="header">
    <transition>
      <Background
        v-show="idBtn !== null"
        :idBtn="idBtn"
        :parentRemoveСlassNoScroll="removeСlassNoScroll"
        @update:idBtn="updateIdButton"
      />
    </transition>

    <div id="container" class="container">
      <Popup
        v-if="screenWidth > 992"
        :idBtn="idBtn"
        @update:idBtn="updateIdButton"
      />
      <div class="header__wrapper">
        <router-link class="logo" to="/"><Logo /></router-link>
        <nav class="nav">
          <LocationPopup :isLocation />
          <Location v-if="screenWidth > 992" @click="clickLocation" />
          <router-link v-else to="/LocationPage">
            <Location />
          </router-link>
          <NavBar :links="links" @click="closePopup" />
        </nav>
        <div class="button">
          <button
            v-if="screenWidth > 992"
            id="1"
            :class="{ isActive: 1 === idBtn }"
            class="button__item"
            @click="getButtonId"
          >
            <div
              v-if="buttonCounter > 0"
              :class="{ isActiveCounter: 1 === idBtn }"
              class="button__counter"
            >
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
              <div
                v-if="buttonCounter > 0"
                class="button__counter"
                :class="{ isActiveCounter: 1 === idBtn }"
              >
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
            @click="getButtonId"
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
            @click="getButtonId"
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
            @click="getButtonId"
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
          <Menu
            v-if="screenWidth < 992"
            :isMenu="isMenu"
            @update:isMenu="updateIsMenu"
          />
          <Burger :isMenu="isMenu" @click="toggleMenu" />
        </div>
      </div>
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
  LocationPopup,
  Background,
  Basket,
  MyPage,
  Liked,
  Notices,
} from 'src/components/header/index';

let buttonCounter = ref<number>(1);
let isLocation = ref<boolean>(false);
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
  isLocation.value = false;
  removeСlassNoScroll();
});

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

function eventListenerLocation(event: Event) {
  const target = event.target as HTMLElement;
  if (!target.closest('.LocationPopup') && !target.closest('.location')) {
    isLocation.value = false;
    if (!isLocation.value) {
      document.removeEventListener('click', eventListenerLocation);
    }
  }
}

function clickLocation(): void {
  isLocation.value = !isLocation.value;
  if (isLocation.value) {
    document.addEventListener('click', eventListenerLocation);
  }
}

function updateIsMenu(value: boolean) {
  isMenu.value = value;
  removeСlassNoScroll();
}

function toggleMenu() {
  if ((isMenu.value = !isMenu.value)) {
    addСlassNoScroll();
  } else {
    removeСlassNoScroll();
  }
}

function updateIdButton(value: number | null) {
  idBtn.value = value;
}

function getButtonId(event: Event): void {
  const button = event.currentTarget as HTMLElement;
  const clickedElementId = button.id;
  idBtn.value = +clickedElementId;
  if (!isContainsNoScroll.value) {
    addСlassNoScroll();
  }
}

function closePopup(event: Event): void {
  const navbar = event.target as HTMLElement;
  if (navbar.closest('.navBar__link')) {
    navbar.closest('.navBar__link')?.classList.add('navBar_active');
    if (isContainsNoScroll.value) {
      idBtn.value = null;
      removeСlassNoScroll();
    }
  }
}
</script>

<style scoped lang="scss">
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
      border: 1px solid $akcentnyy-akcentnyy-2;
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
    transition: 0.4s ease;
  }
  .button__counter.isActiveCounter {
    border: 1px solid $akcentnyy-akcentnyy-2;
    background-color: $white;
    color: $akcentnyy-akcentnyy-2;
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
    gap: 0 6px;
  }

  .navBar {
    display: flex;
  }
  .navBar :deep(.navBar__menu) {
    gap: 0 6px;
    .navBar__link {
      transition: background-color 0.4s ease, color 0.4s ease;
      border-radius: 12px;
      padding: 12px 8px;
    }

    .navBar__link:hover,
    .navBar_active {
      background-color: $fon-cvetnye-fony-oranzhevyy-fon;
      color: $akcentnyy-akcentnyy-2;
    }
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

@media screen and (min-width: 1070px) {
  .nav {
    gap: 0 20px;
  }
  .navBar :deep(.navBar__menu) {
    gap: 0 20px;
  }
}

@media screen and (min-width: 1200px) {
  .nav {
    gap: 0 12px;
  }
  .navBar :deep(.navBar__menu) {
    gap: 0 12px;
    .navBar__link {
      border-radius: 12px;
      padding: 22px 18px;
    }
  }
  .button {
    &__text {
      display: block;
    }
  }
}
</style>
