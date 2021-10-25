export const enum Position {
  AFTERBEGIN = `AFTERBEGIN`,
  BEFOREEND = `BEFOREEND`
}

export const enum TagName {
  INPUT = `INPUT`,
  BUTTON = `BUTTON`,
  LABEL = `LABEL`
}

export const enum ElementType {
  DEFAULT = `DEFAULT`,
  TABLE = `TABLE`
}

export const enum Method {
  GET = `GET`
}

export const enum Nav {
  PREV = `PREV`,
  NEXT = `NEXT`
}

export const enum SortMod {
  UP = `UP`,
  DOWN = `DOWN`
}

export const enum SortType {
  NAME = `NAME`,
  HEIGHT = `HEIGHT`,
  MASS = `MASS`,
  GENDER = `GENDER`
}

export type Nullable<T> = T | null;

export type PeopleData = {
  name: string,
  height: string,
  mass: string,
  gender: string
}

export type PeoplesData = Array<PeopleData>;

export type PageData = {
  previous: Nullable<string>,
  next: Nullable<string>,
  results: PeoplesData
}

export interface IPeople {
  name: string,
  height: number,
  mass: number,
  gender: string
}

export interface IPage {
  prev: Nullable<number>,
  next: Nullable<number>,
  cur: number
  peoples: Array<IPeople>
}

export interface IApi {
  getPage(page: number):Promise<IPage>
}

export interface IAbstractComponent {
  getElement(): HTMLElement,
  removeElement(): void
}

export type ILoadingView = IAbstractComponent

export interface INavigation extends IAbstractComponent {
  curNum: number,
  disablePrevButton(): void,
  disableNextButton(): void,
  enablePrevButton(): void,
  enableNextButton(): void,
}

export interface ITable extends IAbstractComponent {
  tableList: HTMLElement,
  block(): void,
  unblock(): void
}

export interface ITableController {
  setPage(page: IPage): void,
  loadingModOFF(): void
}
