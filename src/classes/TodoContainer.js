import { isSameWeek, isSameDay, parseISO } from 'date-fns';

const TodoContainer = (todoContainer = [], todoContainerProjects = []) => {
  let container = todoContainer;
  const projects = todoContainerProjects;
  const date = new Date();
  const getContainer = () => [...container]; // shallow copy so can't modify container from
  const addTodo = (newTodo) => container.push(newTodo);
  const getTodoByUUID = (UUID) => container.filter((todo) => todo.getID() === UUID).pop();
  const removeTodoByUUID = (UUID) => {
    container = container.filter((todo) => todo.getID() !== UUID);
  };
  const getAllProjects = () => [...projects];
  const getProject = (project) => container.filter((todo) => (todo.getProject() === project));
  const filterByWeek = () => container.filter(
    (todo) => isSameWeek(parseISO(todo.getDueDate()), date),
  );
  const filterByDay = () => container.filter(
    (todo) => isSameDay(parseISO(todo.getDueDate()), date),
  );
  const toJSON = () => ({
    container: [...container],
    projects: [...projects],
  });
  return {
    toJSON,
    getContainer,
    addTodo,
    getTodoByUUID,
    removeTodoByUUID,
    getAllProjects,
    getProject,
    filterByDay,
    filterByWeek,
  };
};
export default TodoContainer;
