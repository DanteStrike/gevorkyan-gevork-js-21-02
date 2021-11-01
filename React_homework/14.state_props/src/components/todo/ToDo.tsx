import React, {useEffect, useState} from "react";
import './ToDo.css';
import Task from "../task/Task";
import {Color, FilterType, IToDoState, IToDoTask, SortType, Tag, TaskStatus} from "../../types";
import createDefaultTask from "../../helpers/create-default-task";
import TaskEdit from "../task-edit/TaskEdit";
import cloneDeep from "lodash.clonedeep";
import {updateTasksStatuses, updateTaskStatus} from "../../helpers/update-tasks-statuses";
import Filters from "../filters/Filters";
import Sort from "../sort/Sort";

const availableTags = new Set([Tag.SELF, Tag.WORK, Tag.EDUCATION]);
const availableColors = new Set([Color.DEFAULT, Color.GREEN, Color.YELLOW, Color.RED]);
const availableFilters = [FilterType.NORMAL, FilterType.UPCOMING, FilterType.ON_PROGRESS,
  FilterType.OVERDUE, FilterType.ACHIEVED, FilterType.ALL];
const availableSort = [SortType.BY_DATE_UP, SortType.BY_DATE_DOWN];

interface ToDoProps {
  initialFilter?: FilterType,
  initialSort?: SortType,
  value?: IToDoTask[],
  onChange?: (data: IToDoState) => void,
}

const ToDo = (
  {
    initialFilter = FilterType.DEFAULT,
    initialSort = SortType.DEFAULT,
    value = [],
    onChange = () => {},
  }: ToDoProps
) => {
  const [filter, setFilter] = useState<FilterType>(initialFilter);
  const handleFilterChange = (filter: FilterType) => setFilter(filter);

  const [sort, setSort] = useState<SortType>(initialSort);
  const handleSortChange = (sort: SortType) => setSort(sort);

  const [tasks, setTasks] = useState<IToDoTask[]>(cloneDeep(value));
  const handleTaskAdd = () => setTasks((oldTasks) => {
    const newTasks = cloneDeep(oldTasks);
    newTasks.push(createDefaultTask());
    return newTasks;
  });
  const handleTaskDelete = (id: number) => setTasks((oldTasks) => {
    const newTasks = cloneDeep(oldTasks);
    newTasks.splice(newTasks.findIndex((task) => task.id === id), 1);
    return newTasks;
  });
  const handleTaskUpdate = (updatedTask: IToDoTask) => setTasks((oldTasks) => {
    const newTasks = cloneDeep(oldTasks);
    newTasks[newTasks.findIndex((task) => task.id === updatedTask.id)] = updateTaskStatus(updatedTask);
    return newTasks;
  });
  const handleEditModOn = (id: number) => setTasks((oldTasks) => {
    return cloneDeep(oldTasks).map((task) => {
      task.isEdit = task.id === id;
      return task
    });
  });
  const handleEditModOff = (id: number) => setTasks((oldTasks) => {
    const newTasks = cloneDeep(oldTasks);
    newTasks[newTasks.findIndex((task) => task.id === id)].isEdit = false;
    return newTasks;
  });
  const handleCompleteToggle = (id: number) => setTasks((oldTasks) => {
    const newTasks = cloneDeep(oldTasks);
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks[index].isComplete = !newTasks[index].isComplete;
    newTasks[index] = updateTaskStatus(newTasks[index]);
    return newTasks;
  });
  const handleTimerTick = () => setTasks((oldTasks) => updateTasksStatuses(oldTasks));

  const [displayedTasks, setDisplayedTasks] = useState<IToDoTask[]>(cloneDeep(tasks));

  useEffect(() => {
    setTasks(updateTasksStatuses(tasks));
    const timerID = setInterval(handleTimerTick, 60000);
    return () => clearInterval(timerID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let displayedTasks: IToDoTask[] = cloneDeep(tasks);

    switch (filter) {
      case FilterType.NORMAL:
        displayedTasks = displayedTasks.filter((task) =>
          task.status === TaskStatus.OVERDUE || task.status === TaskStatus.ON_PROGRESS || task.status === TaskStatus.UPCOMING);
        break;

      case FilterType.ACHIEVED:
        displayedTasks = displayedTasks.filter((task) => task.status === TaskStatus.ACHIEVED);
        break;

      case FilterType.ON_PROGRESS:
        displayedTasks = displayedTasks.filter((task) => task.status === TaskStatus.ON_PROGRESS);
        break;

      case FilterType.OVERDUE:
        displayedTasks = displayedTasks.filter((task) => task.status === TaskStatus.OVERDUE);
        break;

      case FilterType.UPCOMING:
        displayedTasks = displayedTasks.filter((task) => task.status === TaskStatus.UPCOMING);
        break;
    }

    switch (sort) {
      case SortType.BY_DATE_UP:
        displayedTasks = displayedTasks.sort((a, b) => a.start - b.start);
        break;

      case SortType.BY_DATE_DOWN:
        displayedTasks = displayedTasks.sort((a, b) => b.start - a.start);
        break;
    }

    setDisplayedTasks(displayedTasks);
    onChange({filter, sort, tasks})
  }, [filter, sort, tasks, onChange]);

  return (
    <section className="todo-list">
      <h2 className="todo__title">Лист задач</h2>
      <Filters initialFilter={initialFilter} filters={availableFilters} onChange={handleFilterChange}/>
      <Sort initialSort={initialSort} sortItems={availableSort} onChange={handleSortChange}/>
      <ul className="todo__list">
        {displayedTasks.map((task, index) =>
          <li className="todo__list-item" key={index}>
            {task.isEdit ?
              <TaskEdit
                value={task}
                allTags={availableTags}
                allColors={availableColors}
                onClose={handleEditModOff}
                onDelete={handleTaskDelete}
                onSave={handleTaskUpdate}/>
                :
              <Task
                value={task}
                allTags={availableTags}
                onEdit={handleEditModOn}
                onCompleteToggle={handleCompleteToggle}
              />
            }
          </li>)}
        <li className="todo__list-item">
          <div className="todo__add">
            <button className="todo__add-btn" onClick={handleTaskAdd}>+</button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ToDo;
