// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { insertTask, insertTaskArray } from './addelement.js';

const todoul = document.querySelector('.todo-elements');

const tasksData = [
  {
    description: 'task 1',
    completed: true,
    index: 0,
  },
  {
    description: 'task 2',
    completed: false,
    index: 1,
  },
  {
    description: 'task 3',
    completed: false,
    index: 2,
  },
  {
    description: 'task 4',
    completed: false,
    index: 3,
  },
  {
    description: 'task 5',
    completed: true,
    index: 4,
  },
];

window.insertTask = (task) => {
  insertTask(task);
};

window.insertTaskArray = () => {
  todoul.innerHTML = '';
  insertTaskArray(tasksData);
};

window.onEnter = (e) => {
  if (e.keyCode === 13) {
    insertTask(e.target.value);
    e.target.value = '';
  }
};

window.onload = () => window.insertTaskArray();