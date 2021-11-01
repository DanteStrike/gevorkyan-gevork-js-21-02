import {Color, IToDoTask, Tag, TaskStatus} from "../types";

const toDoListMock: IToDoTask[] = [
  {
    id: 1,
    title: `ToDo1`,
    desc: `Desc1`,
    start: 1135521250229,
    end: 1635591251229,
    markColor: Color.DEFAULT,
    tags: new Set<Tag>([Tag.SELF]),
    status: TaskStatus.OVERDUE,
    isComplete: false,
    isEdit: false
  },{
    id: 2,
    title: `ToDo2`,
    desc: `Desc2`,
    start: 1235521250229,
    end: 1637521251229,
    markColor: Color.DEFAULT,
    tags: new Set<Tag>([Tag.SELF]),
    status: TaskStatus.UPCOMING,
    isComplete: false,
    isEdit: false
  },{
    id: 3,
    title: `ToDo3`,
    desc: `Desc3`,
    start: 1335521250229,
    end: 1639521251229,
    markColor: Color.GREEN,
    tags: new Set<Tag>([Tag.SELF, Tag.EDUCATION]),
    status: TaskStatus.UPCOMING,
    isComplete: false,
    isEdit: false
  },{
    id: 4,
    title: `ToDo4`,
    desc: `Desc4`,
    start: 1435521250229,
    end: 1635591251229,
    markColor: Color.DEFAULT,
    tags: new Set<Tag>([Tag.EDUCATION]),
    status: TaskStatus.ON_PROGRESS,
    isComplete: false,
    isEdit: false
  },{
    id: 5,
    title: `ToDo5`,
    desc: `Desc5`,
    start: 1535521250229,
    end: 1675521251229,
    markColor: Color.RED,
    tags: new Set<Tag>([Tag.WORK]),
    status: TaskStatus.OVERDUE,
    isComplete: false,
    isEdit: false
  }
]

export default toDoListMock;
