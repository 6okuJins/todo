import TodoDisplay from '../pages';

const fillContent = (container, contentNode) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < container.length; i++) {
    contentNode.insertBefore(TodoDisplay(container[i]), contentNode.firstChild);
  }
};
export default fillContent;
