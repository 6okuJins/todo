import { plusThick } from '../assets';

const AddTodoDisplay = () => {
  const addTodoDisplay = (() => {
    const result = document.createElement('form');
    result.classList.add('add-todo-container', 'inactive');
    result.toggle = () => {
      result.classList.toggle('active');
      result.classList.toggle('inactive');
    };
    return result;
  })();

  // create button to open popup
  const newTodoBtn = (() => {
    const button = document.createElement('button');
    button.classList.add('open-popup');

    const icon = document.createElement('svg');
    button.innerHTML = plusThick;

    const textDiv = document.createElement('div');
    textDiv.textContent = 'Add new Todo';

    button.append(icon, textDiv);
    button.addEventListener('click', () => addTodoDisplay.toggle());
    return button;
  })();

  // create popup
  const popUp = (() => {
    const result = document.createElement('div');
    result.classList.add('popup');

    const titleField = document.createElement('input');
    titleField.setAttribute('type', 'text');
    titleField.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Add';

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'reset');
    cancelBtn.classList.add('cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => addTodoDisplay.toggle());

    result.append(titleField, submitBtn, cancelBtn);
    return result;
  })();

  // add button and popup to display div
  addTodoDisplay.append(newTodoBtn, popUp);
  return addTodoDisplay;
};
export default AddTodoDisplay;
