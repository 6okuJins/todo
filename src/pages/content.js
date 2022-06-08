import AddNewDisplay from './AddNewDisplay';

const Content = () => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.append(AddNewDisplay('todo'));
  return content;
};
export default Content;
