import { trashCan } from '../assets';
/**
 * Returns a DOM element displaying the todo's info.
 * {@link todoDisplay}
 * @param {Object} todo
 * @return {Object} DOMElement
 */
const TodoDisplay = (todo) => {
  const todoDisplay = document.createElement('div');
  todoDisplay.classList.add('todo');
  todoDisplay.dataset.uuid = todo.getID();

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.getStatus();
  if (checkBox.checked) {
    todoDisplay.classList.add('completed');
  }
  checkBox.addEventListener('click', () => {
    todo.toggleStatus();
    todoDisplay.classList.toggle('completed');
  });

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = todo.getTitle();

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.classList.add('dueDate');
  dueDate.value = todo.getDueDate();
  dueDate.addEventListener('change', () => {
    todo.setDueDate(dueDate.value);
  });

  const deleteBtn = document.createElement('button');
  const icon = document.createElement('svg');
  deleteBtn.classList.add('delete');
  icon.innerHTML = trashCan;
  deleteBtn.append(icon);

  todoDisplay.append(checkBox, title, dueDate, deleteBtn);
  return todoDisplay;
};
export default TodoDisplay;
