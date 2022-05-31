const Project = () => {
  let title;
  let description;
  let container = [];

  const setTitle = (newTitle) => { title = newTitle; };
  const setDescription = (newDescription) => { description = newDescription; };
  const getTitle = () => title;
  const getDescription = () => description;
  const getContainer = () => container;
  const addTodo = (newTodo) => container.push(newTodo);
  const getTodoByUUID = (UUID) => container.filter((todo) => todo.getID() === UUID).pop();
  const removeTodoByUUID = (UUID) => {
    container = container.filter((todo) => todo.getID() !== UUID);
  };
  return {
    setTitle,
    setDescription,
    getTitle,
    getDescription,
    getContainer,
    addTodo,
    getTodoByUUID,
    removeTodoByUUID,
  };
};
export default Project;
