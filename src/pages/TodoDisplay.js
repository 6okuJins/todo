import { trashCan, bulletIcon } from '../assets';
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
  todoDisplay.append(checkBox);

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = todo.getTitle();
  todoDisplay.append(title);

  if (todo.getProject()) {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('open-project');
    const projectIcon = document.createElement('div');
    const textDiv = document.createElement('div');
    textDiv.textContent = todo.getProject();
    projectIcon.innerHTML = bulletIcon;
    projectBtn.append(projectIcon, textDiv);
    todoDisplay.append(projectBtn);
  }

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.classList.add('dueDate');
  dueDate.value = todo.getDueDate();
  dueDate.addEventListener('change', () => {
    todo.setDueDate(dueDate.value);
  });
  todoDisplay.append(dueDate);

  const deleteBtn = document.createElement('button');
  const icon = document.createElement('svg');
  deleteBtn.classList.add('delete');
  icon.innerHTML = trashCan;
  deleteBtn.append(icon);
  todoDisplay.append(deleteBtn);

  return todoDisplay;
};
export default TodoDisplay;
