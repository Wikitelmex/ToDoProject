// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { insertTaskArray } from './modules/addelement.js';
import { stateTask, saveData, loadData } from './modules/statusupdates.js';
import {
  onEditable, onNonEditable, orderArray, removeFromArray, insertOnArray, updateFromArray,
} from './modules/crudtask.js';

const todoul = document.querySelector('.todo-elements');

let tasksData = [];

window.insertTaskArray = () => {
  todoul.innerHTML = '';
  insertTaskArray(tasksData);
};

window.onEnter = (e) => {
  if (e.keyCode === 13) {
    if (e.target.value === null || e.target.value.match(/^ *$/) !== null) {
      return;
    }

    insertOnArray(e.target.value, tasksData);
    saveData(tasksData);
    window.insertTaskArray(tasksData);

    e.target.value = '';
  }
};

window.onAddButtonClick = () => {
  const floatingInput = document.querySelector('#floatingInput');
  if (floatingInput.value === null || floatingInput.value.match(/^ *$/) !== null) {
    return;
  }

  insertOnArray(floatingInput.value, tasksData);
  saveData(tasksData);
  window.insertTaskArray(tasksData);

  floatingInput.value = '';
  floatingInput.focus();
};

window.onChangeCheck = (e) => {
  stateTask(e, tasksData);
  saveData(tasksData);
};

window.onEditable = (elementId) => {
  onEditable(elementId);
};

window.onNonEditable = (elementId) => {
  const editable = document.querySelector(`#editable${elementId}`);
  updateFromArray(elementId, tasksData, editable.value);
  saveData(tasksData);
  setTimeout(() => {
    onNonEditable(elementId);
  }, 200);
};

window.onRemoveButtonClick = (elementId) => {
  removeFromArray(elementId, tasksData);
  orderArray(tasksData);
  window.insertTaskArray(tasksData);
  saveData(tasksData);
};

window.onClearAllCompleted = () => {
  tasksData = tasksData.filter((word) => word.completed === false);
  orderArray(tasksData);
  window.insertTaskArray(tasksData);
  saveData(tasksData);
};

window.onload = () => {
  const d = loadData();
  if (d != null) {
    tasksData = d;
  }
  window.insertTaskArray(tasksData);
};
