import {Color, IToDoTask, TaskStatus} from "../types";

const createDefaultTask = (): IToDoTask => ({
  id: Date.now(),
  title: `...`,
  desc: `...`,
  start: Date.now(),
  end: Date.now(),
  markColor: Color.DEFAULT,
  tags: new Set([]),
  status: TaskStatus.ON_PROGRESS,
  isComplete: false,
  isEdit: false
})

export default createDefaultTask;
