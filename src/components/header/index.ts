import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { myLink } from './type';
import { widthWindow } from './debounce';
import Logo from 'src/components/logo/Logo.vue';
import NavBar from 'src/components/navigation/NavBar.vue';
import Location from 'src/components/button/Location.vue';
import Burger from 'src/components/button/Burger.vue';
import Menu from 'src/components/header/Menu.vue';
import Popup from 'src/components/popup/Popup.vue';
import Background from 'src/components/popup/Background.vue';
import Basket from 'src/components/SVG/Basket.vue';
import MyPage from 'src/components/SVG/MyPage.vue';
import Liked from 'src/components/SVG/Liked.vue';
import Notices from 'src/components/SVG/Notices.vue';

export type { myLink };
export {
  ref,
  watch,
  useRouter,
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
};