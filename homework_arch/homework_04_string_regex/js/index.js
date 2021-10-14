import * as taskOne from './tasks/task-1';
import * as taskTwo from './tasks/task-2';
import * as taskThree from './tasks/task-3';
import * as taskFore from './tasks/task-4';
import * as taskFive from './tasks/task-5';
import * as taskSix from './tasks/task-6';
import * as taskSeven from './tasks/task-7';
import * as taskEight from './tasks/task-8';

const tasks = document.querySelectorAll(`.task`);

taskOne.init(tasks[0]);
taskTwo.init(tasks[1]);
taskThree.init(tasks[2]);
taskFore.init(tasks[3]);
taskFive.init(tasks[4]);
taskSix.init(tasks[5]);
taskSeven.init(tasks[6]);
taskEight.init(tasks[7]);
