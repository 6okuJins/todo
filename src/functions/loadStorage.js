import { TodoContainer, Todo } from '../classes';

const loadStorage = () => {
  const storage = JSON.parse(localStorage.getItem('todoContainer'));
  let todoContainer;
  if (storage) {
    const container = storage.container.map((todo) => Todo(...Object.values(todo)));
    todoContainer = TodoContainer(container, storage.projects);
  } else {
    todoContainer = TodoContainer();
  }
  return todoContainer;
};
export default loadStorage;
