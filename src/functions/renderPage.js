import {
  Header, Sidebar, Content, Footer,
} from '../pages';

const renderPage = () => {
  const body = document.querySelector('body');
  const header = Header();
  const sideBar = Sidebar();
  const content = Content();
  const footer = Footer();
  body.append(header, sideBar, content, footer);
  return {
    sideBar,
    content,
  };
};
export default renderPage;
