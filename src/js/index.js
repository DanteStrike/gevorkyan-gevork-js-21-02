import * as taskOne from './tasks/task-1';
import * as taskTwo from './tasks/task-2';

const tasks = document.querySelectorAll(`.task`);

taskOne.init(tasks[0]);
taskTwo.init(tasks[1]);
