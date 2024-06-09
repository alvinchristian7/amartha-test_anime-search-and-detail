export {};
type NotA<T, Reserved extends string> = T extends Reserved ? never : T;
type NotB<T, Reserved extends string> = Reserved extends T ? never : T;

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Window {
    workbox: any;
  }
  type NumberOrString = number | string;
  type NumberOrNull = number | null;
  type StringOrNull = string | null;
  type NumberNullOrStringNull = number | string | null;
  type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
  type ExcludeString<T, Reserved extends string> = NotA<T, Reserved> & NotB<T, Reserved>;
}
