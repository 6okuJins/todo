import { checkBox } from '../assets';

const Header = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.textContent = 'Todo';
  logo.classList.add('logo');
  header.append(logo);
  const logoImg = document.createElement('div');
  logoImg.classList.add('img-container');
  logoImg.innerHTML = checkBox;
  logo.append(logoImg);

  const projectTitle = document.createElement('div');
  header.append(projectTitle);
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'Inbox';

  const ruler = document.createElement('div');
  header.append(ruler);
  ruler.classList.add('rounded');
  return header;
};
export default Header;
