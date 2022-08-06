import {
  Header, Sidebar, Content, Footer, signInPhonePage,
} from '../pages';

const renderPage = () => {
  const body = document.querySelector('body');
  const signInPhoneModal = signInPhonePage();
  const header = Header();
  const sideBar = Sidebar();
  const content = Content();
  const footer = Footer();
  body.append(signInPhoneModal, header, sideBar, content, footer);
  return {
    sideBar,
    content,
  };
};
export default renderPage;
