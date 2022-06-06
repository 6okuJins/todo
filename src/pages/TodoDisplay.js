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
    todo.classList.add('completed');
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
  dueDate.addEventListener('click', () => {
    todo.setDueDate(dueDate.value);
  });

  todoDisplay.append(checkBox, title, dueDate);
  return todoDisplay;
};
export default TodoDisplay;
