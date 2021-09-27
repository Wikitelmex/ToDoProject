export function stateTask(e, elementArray = []) {
  const idx = elementArray.findIndex((obj) => obj.index === parseInt(e.target.value, 10));
  if (idx > -1) {
    elementArray[idx].completed = e.target.checked;
  }
}

export function saveData(elementArray = []) {
  localStorage.setItem('todoData', JSON.stringify(elementArray));
}

export function loadData() {
  return JSON.parse(localStorage.getItem('todoData'));
}