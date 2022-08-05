import AddNewDisplay from './AddNewDisplay';
import { bulletIcon, trashCan, inboxIcon, todayIcon, weekIcon } from '../assets';
const sideBarButton = (content) => {
  const button = document.createElement('button');
  button.classList.add('side-bar-button', content);
  const textDiv = document.createElement('span');
  textDiv.textContent = content;
  button.append(textDiv);
  return button;
};
const sideBar = () => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');

  const inboxButton = sideBarButton('Inbox');
  inboxButton.classList.add('active');
  const todayButton = sideBarButton('Today');
  const weekButton = sideBarButton('Week');

  const inboxIconContainer = document.createElement('div');
  const todayIconContainer = document.createElement('div');
  const weekIconContainer = document.createElement('div');
  inboxIconContainer.innerHTML = inboxIcon;
  todayIconContainer.innerHTML = todayIcon;
  weekIconContainer.innerHTML = weekIcon;
  inboxButton.append(inboxIconContainer);
  todayButton.append(todayIconContainer);
  weekButton.append(weekIconContainer);
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

      const bullIcon = document.createElement('div');
      bullIcon.innerHTML = bulletIcon;
      bullIcon.classList.add('bullet-icon');
      projectBtn.append(bullIcon);

      const projectBtnText = document.createElement('div');
      projectBtnText.textContent = projects[i];
      projectBtn.append(projectBtnText);

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = trashCan;
      deleteButton.classList.add('delete');
      projectDiv.append(projectBtn, deleteButton);
      projectContainer.append(projectDiv);
    }
  };
  sideBar.append(projectDivider, projectContainer, addProjectDisplay);
  return sideBar;
};
export default sideBar;
