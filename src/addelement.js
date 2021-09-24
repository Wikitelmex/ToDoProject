export function insertTask(description = 'new task', completed = false, elementId = 0) {
  const elements = document.querySelector('.todo-elements');
  const chk = completed ? 'checked' : '';

  elements.innerHTML
  += (`
    <li class="border-bottom ms-0 d-flex" id='element${elementId}'>
      <div class="form-check w-100 d-flex align-items-center">
          <input type="checkbox" ${chk} class="form-check-input ms-1 me-1" id='check${elementId}' value='${elementId}' onchange='window.onChangeCheck(event)'>
          <input class="w-100 border-0 bg-transparent" readonly="true" type="text" id="editable${elementId}" name="lname" value="${description}" ondblclick="window.onEditable(${elementId})" onfocusout="window.onNonEditable(${elementId})">
          <button class="btn btn-outline-secondary float-end border-0 p-3 d-none" id='trash${elementId}' type="button" onclick='window.onRemoveButtonClick(${elementId})'><i class="bi bi-trash"></i></button>
      </div>
      <button class="btn btn-outline-secondary float-end border-0 p-3" type="button"><i class="bi bi-grip-vertical"></i></button>
    </li>
  `);
}

export function insertTaskArray(elementArray = []) {
  elementArray.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  elementArray.forEach((element) => {
    insertTask(element.description, element.completed, element.index);
  });
}

export function deleteTask(elementId) {
  const elements = document.querySelector('.todo-elements');
  const element = document.querySelector(`#element${elementId}`);
  elements.removeChild(element);
}