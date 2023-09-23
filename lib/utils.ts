export function debounce(fn: () => void, delay: number) {
  let timer: any = 0;
  // @ts-ignore
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}
