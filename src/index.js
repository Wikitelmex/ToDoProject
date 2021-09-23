// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { insertTask, insertTaskArray, deleteTask } from './addelement.js';
import { stateTask, saveData, loadData } from './statusupdates.js';
import { onEditable, onNonEditable, orderArray, removeFromArray, insertOnArray } from "./crudtask";

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
    
    const x = insertOnArray(e.target.value,tasksData);
    insertTask(x.description, x.completed, x.index);

    saveData(tasksData);
    
    e.target.value = '';
  }
};

window.onAddButtonClick = () => {
  const floatingInput = document.querySelector("#floatingInput");
  if (floatingInput.value === null || floatingInput.value.match(/^ *$/) !== null) {
    return;
  }
  
  const x = insertOnArray(floatingInput.value,tasksData);
  insertTask(x.description, x.completed, x.index);

  saveData(tasksData);
  
  floatingInput.value = '';
  floatingInput.focus();
}

window.onChangeCheck = (e) => {
  stateTask(e, tasksData);
  saveData(tasksData);
};

window.onEditable = (elementId) => {
  onEditable(elementId);
};

window.onNonEditable  = (elementId) => {
  setTimeout(() => {
    onNonEditable(elementId);
  }, 200);
  
};

window.onRemoveButtonClick = (elementId) => {
  removeFromArray(elementId,tasksData);
  deleteTask(elementId);
  orderArray(tasksData);
  saveData(tasksData);
}

window.onload = () => {
  const d = loadData();
  if (d != null) {
    tasksData = d;
  }
  window.insertTaskArray(tasksData);
};
