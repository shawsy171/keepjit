
export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
}

export interface FormControlEventTarget extends EventTarget {
  value: string;
}