import { ref } from 'vue';
export const widthWindow = ref<number>(
  window.innerWidth || document.body.clientWidth
);

function debounce<T extends (...args: void[]) => void>(
  func: T,
  timeoutMs: number
) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), timeoutMs);
  };
}
function handlerResize() {
  widthWindow.value = window.innerWidth || document.body.clientWidth;
}

window.addEventListener('resize', debounce(handlerResize, 500));
