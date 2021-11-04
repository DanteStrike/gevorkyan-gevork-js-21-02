import {IToDoTask, TaskStatus} from "../types";
import cloneDeep from "lodash.clonedeep";

export const updateTasksStatuses = (tasks: IToDoTask[]): IToDoTask[] => tasks.map(updateTaskStatus);
export const updateTaskStatus = (task: IToDoTask): IToDoTask => {
  const newTask = cloneDeep(task);
  if (newTask.isComplete) {
    newTask.status = TaskStatus.ACHIEVED;
    return newTask;
  }

  const now = Date.now();
  if (now < newTask.start) {
    newTask.status = TaskStatus.UPCOMING;
    return newTask;
  }

  if (now > newTask.end) {
    newTask.status = TaskStatus.OVERDUE;
    return newTask;
  }

  if (newTask.start < now && now < newTask.end) {
    newTask.status = TaskStatus.ON_PROGRESS;
    return newTask;
  }

  return newTask;
};
