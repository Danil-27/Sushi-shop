import { scroll } from 'quasar';
const { getScrollbarWidth } = scroll;
function setScrollbarWidthCSSVariable() {
  const scrollbarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty(
    '--scrollbar-width',
    `${scrollbarWidth}px`
  );
}
export { setScrollbarWidthCSSVariable };
