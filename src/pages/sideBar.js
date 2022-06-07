import AddNewDisplay from './AddNewDisplay';
const sideBarButton = (content) => {
  const button = document.createElement('button');
  button.classList.add('side-bar-button', content);
  button.textContent = content;
  return button;
};
const sideBar = () => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');

  const inboxButton = sideBarButton('Inbox');
  const todayButton = sideBarButton('Today');
  const weekButton = sideBarButton('Week');

  const projectDivider = document.createElement('div');
  projectDivider.textContent = 'Projects';
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  const addProjectDisplay = AddNewDisplay('project');

  sideBar.append(inboxButton, todayButton, weekButton, projectDivider, projectContainer, addProjectDisplay);
  return sideBar;
};
export default sideBar;
