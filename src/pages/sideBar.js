const sideBarButton = (content) => {
  const button = document.createElement('button');
  button.classList.add('side-bar-button');
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
  projectDivider.textContent = "Projects";
  sideBar.append(inboxButton, todayButton, weekButton, projectDivider);
  return sideBar;
};
export default sideBar;
