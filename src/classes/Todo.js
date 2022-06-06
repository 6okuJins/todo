/**
 * Returns new Todo object.
 * @param {string} todoTitle
 * @returns {object} Todo
 */
const Todo = (
  todoTitle = '',
  todoProject = '',
  todoDescription = '',
  todoDueDate = '',
  todoPriority = '',
  todoID = crypto.randomUUID(),
  todoStatus = false,
) => {
  // default values allows object to be properly parsed to string and back
  const ID = todoID;
  let title = todoTitle;
  let description = todoDescription;
  let dueDate = todoDueDate;
  const project = todoProject;
  let priority = todoPriority;
  let status = todoStatus; // false means incomplete
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const toggleStatus = () => { status = !status; };
  const getTitle = () => title;
  const getID = () => ID;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getProject = () => project;
  const getPriority = () => priority;
  const getStatus = () => status;
  const toJSON = () => ({
    title,
    project,
    description,
    dueDate,
    priority,
    ID,
    status,
  });
  return {
    toJSON,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleStatus,
    getTitle,
    getID,
    getDescription,
    getDueDate,
    getProject,
    getPriority,
    getStatus,
  };
};
export default Todo;
