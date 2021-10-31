export const enum FilterType {
  DEFAULT = `NORMAL`,
  ALL = `ALL`,
  NORMAL = `NORMAL`,
  OVERDUE = `OVERDUE`,
  ACHIEVED = `ACHIEVED`,
  UPCOMING = `UPCOMING`,
  ON_PROGRESS = `ON-PROGRESS`
}

export const enum SortType {
  DEFAULT = `BY_DATE_UP`,
  BY_DATE_UP = `BY_DATE_UP`,
  BY_DATE_DOWN = `BY_DATE_DOWN`
}

export const enum TaskStatus {
  OVERDUE = `OVERDUE`,
  ACHIEVED = `ACHIEVED`,
  UPCOMING = `UPCOMING`,
  ON_PROGRESS = `ON PROGRESS`
}

export const enum Tag {
  SELF = `SELF`,
  WORK = `WORK`,
  EDUCATION = `EDUCATION`
}

export const enum Color {
  DEFAULT = `transparent`,
  GREEN = `#008000`,
  YELLOW = `#FDE910`,
  RED = `#DC143C`,
}

export interface IToDoTask {
  id: number,
  title: string,
  desc: string,
  start: number,
  end: number,
  markColor: Color,
  tags: Set<Tag>,
  status: TaskStatus,
  isComplete: boolean,
  isEdit: boolean
}

export interface IToDo {
  toDoList: IToDoTask[],
  filterType: FilterType,
  sortType: SortType
}
