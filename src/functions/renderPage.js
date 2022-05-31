import Header from '../pages/header.js';
import Sidebar from '../pages/sideBar.js';
import Content from '../pages/content.js';
import Footer from '../pages/footer.js';

const renderPage = () => {
  const body = document.querySelector('body');
  const header = Header();
  const sideBar = Sidebar();
  const content = Content();
  const footer = Footer();
  body.append(header, sideBar, content, footer);
};
export default renderPage;
