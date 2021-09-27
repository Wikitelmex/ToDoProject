export function onEditable(elementId = 0) {
  const editable1 = document.querySelector(`#editable${elementId}`);
  const trash1 = document.querySelector(`#trash${elementId}`);

  editable1.removeAttribute('readonly');
  trash1.setAttribute('class', 'btn btn-outline-secondary float-end border-0 p-3 d-block');
}

export function onNonEditable(elementId = 0) {
  const editable1 = document.querySelector(`#editable${elementId}`);
  if (editable1 === null) {
    return;
  }
  const trash1 = document.querySelector(`#trash${elementId}`);

  editable1.setAttribute('readonly', '');
  trash1.setAttribute('class', 'btn btn-outline-secondary float-end border-0 p-3 d-none');
}

export function orderArray(elementArray = []) {
  elementArray.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  for (let index = 0; index < elementArray.length; index += 1) {
    elementArray[index].index = index + 1;
  }
}

export function removeFromArray(index = 0, elementArray = []) {
  const idx = elementArray.findIndex((obj) => obj.index === parseInt(index, 10));
  if (idx > -1) {
    elementArray.splice(idx, 1);
    orderArray(elementArray);
  }
}

export function updateFromArray(index = 0, elementArray = [], description = '') {
  const idx = elementArray.findIndex((obj) => obj.index === parseInt(index, 10));
  if (idx > -1) {
    elementArray[idx].description = description;
  }
}

export function insertOnArray(description = '', elementArray = []) {
  const element = {
    description,
    completed: false,
    index: elementArray.length + 1,
  };
  elementArray.push(element);
  return element;
}