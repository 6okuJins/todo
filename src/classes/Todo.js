/**
 * Returns new Todo object.
 * @param {string} todoTitle
 * @returns {object} Todo
 */
const Todo = (
  todoTitle,
  todoProject,
  todoDescription,
  todoDueDate,
  todoPriority,
  todoID = crypto.randomUUID(),
  todoStatus = false,
) => {
  const ID = todoID;
  let title = todoTitle;
  let description;
  let dueDate;
  const project = todoProject;
  let priority;
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
