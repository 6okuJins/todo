const emptyContent = (contentNode) => {
  while (contentNode.children.length > 1) {
    contentNode.removeChild(contentNode.children[0]);
  }
};
export default emptyContent;
