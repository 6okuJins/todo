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
  inboxButton.classList.add('active');
  const todayButton = sideBarButton('Today');
  const weekButton = sideBarButton('Week');
  sideBar.append(inboxButton, todayButton, weekButton);

  const projectDivider = document.createElement('div');
  projectDivider.textContent = 'Projects';

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');

  const addProjectDisplay = AddNewDisplay('project');
  addProjectDisplay.classList.add('side-bar-button');

  sideBar.emptySideBar = () => {
    while (projectContainer.firstChild) {
      projectContainer.removeChild(projectContainer.firstChild);
    }
  };
  sideBar.fillSideBar = (projects) => {
    for (let i = 0; i < projects.length; i++) {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project', 'side-bar-button');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('open-project');
      projectBtn.textContent = projects[i];
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.classList.add('delete');
      projectDiv.append(projectBtn, deleteButton);
      projectContainer.append(projectDiv);
    }
  };
  sideBar.append(projectDivider, projectContainer, addProjectDisplay);
  return sideBar;
};
export default sideBar;
