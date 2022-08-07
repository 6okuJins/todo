import {parseISO} from 'date-fns';
import { TodoContainer, Todo } from '../classes';

const loadStorage = (cloudStorage) => {
  let storage = cloudStorage;
  if (!storage) {
    storage = JSON.parse(localStorage.getItem('todoContainer'));
  } else {
    storage = storage.data();
  }

  let todoContainer;
  if (storage) {
    const container = storage.container.map((todo) => Todo(todo.title, todo.project, todo.description, todo.dueDate, todo.priority, todo.ID, todo.status));
    todoContainer = TodoContainer(container, storage.projects);
  } else {
    todoContainer = TodoContainer();
  }
  return todoContainer;
};
export default loadStorage;
