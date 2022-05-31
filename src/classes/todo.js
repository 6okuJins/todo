const Todo = () => {
  let title;
  const ID = crypto.randomUUID();
  let description;
  let dueDate;
  let priority;
  let status = false;
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
