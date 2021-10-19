import {initTaskOne} from "./tasks/task-1";
import {initTaskTwo} from "./tasks/task-2";
import {initTaskThree} from "./tasks/task-3";


const taskOneNode = document.querySelector(`#task-1`);
initTaskOne(taskOneNode);


const taskTwoNode = document.querySelector(`#task-2`);
initTaskTwo(taskTwoNode);


const taskThreeNode = document.querySelector(`#root`);
initTaskThree(taskThreeNode);
