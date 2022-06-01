/**
 * Returns new Todo object.
 * @param {string} todoTitle
 * @returns {object} Todo
 */
const Todo = (todoTitle) => {
  const ID = crypto.randomUUID();
  let title = todoTitle;
  let description;
  let dueDate;
  let priority;
  let status = false; // false means incomplete
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
  const getPriority = () => priority;
  const getStatus = () => status;
  return {
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleStatus,
    getTitle,
    getID,
    getDescription,
    getDueDate,
    getPriority,
    getStatus,
  };
};
export default Todo;
