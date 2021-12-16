export namespace LoggerMessages {
}

type ValuesOf<E> = E[keyof E];
type Enums = typeof LoggerMessages;
export type LoggerMessagesType = {
  [k in keyof Enums]: ValuesOf<Enums[k]>;
}[keyof Enums];
