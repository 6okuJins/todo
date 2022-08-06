import AddNewDisplay from './AddNewDisplay';
import { bulletIcon, trashCan, inboxIcon, todayIcon, weekIcon, profileDefault } from '../assets';
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
      projectDiv.dataset.project = projects[i];

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

  const signInCluster = document.createElement('div');
  signInCluster.classList.add('sign-in-cluster');

  const openModal = document.createElement('button');
  openModal.classList.add('open-modal');
  const openModalText = document.createElement('div');
  openModalText.textContent = 'Sign In With Phone';
  openModal.append(openModalText);
  openModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  });
  const googleSignIn = document.createElement('button');
  googleSignIn.classList.add('google-sign-in');
  const googleSignInText = document.createElement('div');
  googleSignInText.textContent = 'Sign In With Google';
  googleSignIn.append(googleSignInText);

  const signOut = document.createElement('button');
  signOut.classList.add('sign-out');
  const signOutText = document.createElement('div');
  signOutText.textContent = 'Sign Out';
  signOut.append(signOutText);
  signOut.style.display = 'none';

  const profileDisplay = document.createElement('button');
  profileDisplay.classList.add('profile-display');
  const profilePic = new Image();
  profilePic.src = profileDefault;
  profileDisplay.append(profilePic);
  profileDisplay.style.display = 'none';
  const profileText = document.createElement('div');
  profileText.classList.add('profile-text');
  profileDisplay.append(profileText);

  signInCluster.append(profileDisplay, openModal, googleSignIn, signOut);
  sideBar.append(
    projectDivider,
    projectContainer,
    addProjectDisplay,
    signInCluster,
  );

  return sideBar;
};
export default sideBar;
