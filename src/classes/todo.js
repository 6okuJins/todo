const Todo = () => {
  let title;
  const ID = crypto.randomUUID();
  let description;
  let dueDate;
  let priority;
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
  const getTitle = () => title;
  const getID = () => ID;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  return {
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    getTitle,
    getID,
    getDescription,
    getDueDate,
    getPriority,
  };
};
export default Todo;
