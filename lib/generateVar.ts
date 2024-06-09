export const generateArray = (length = 10, value?: ((index: number) => unknown) | unknown) =>
  Array.from({ length }, (v, k) => (typeof value === 'function' ? value(k) : value ?? k));
