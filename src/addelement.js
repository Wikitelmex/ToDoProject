export function insertTask(description = 'new task', completed = false, elementId = 0) {
  const elements = document.querySelector('.todo-elements');
  const chk = completed ? 'checked' : '';
  elements.innerHTML
    += (`
      <li class="border-bottom ms-0 d-flex" id='element${elementId}'>
        <div class="form-check m-3 w-100">
            <input type="checkbox" ${chk} class="form-check-input" id='check${elementId}' >
            <label class="form-check-label" for='check${elementId}'>${description}</label>
        </div>
        <button class="btn btn-outline-secondary float-end border-0 p-3" type="button"><i class="bi bi-grip-vertical"></i></button>
      </li>
    `);
}

export function insertTaskArray(elementArray = []) {
  elementArray.forEach((element) => {
    insertTask(element.description, element.completed, element.index);
  });
}