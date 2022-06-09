import { Todo } from './classes';
import {
  fillContent, renderPage, loadStorage, emptyContent,
} from './functions';
import './styles';

const Controller = (() => {
  // render the page and store the sideBar and content nodes
  const { sideBar, content } = renderPage();
  const todoContainer = loadStorage();
  fillContent(todoContainer.getContainer(), content);
  sideBar.fillSideBar(todoContainer.getAllProjects());
  linkContent();
  linkProjects();
  let currentProject;

  // create new todo
  const createTodoForm = document.querySelector('.add-todo-container .popup');
  createTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = Todo(document.forms.todoPopup.title.value, currentProject);
    todoContainer.addTodo(newTodo);
    updateStorage();
    emptyContent(content);
    if (currentProject) {
      fillContent(todoContainer.getProject(currentProject), content);
    } else {
      fillContent(todoContainer.getContainer(), content);
    }
    linkContent();
    e.target.reset();
  });
  // create new project
  const createProjectForm = document.querySelector('.add-project-container .popup');
  createProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    todoContainer.addProject(document.forms.projectPopup.title.value);
    updateStorage();
    sideBar.emptySideBar();
    sideBar.fillSideBar(todoContainer.getAllProjects());
    linkContent();
    linkProjects();
    e.target.reset();
  });
  // show all
  const inboxButton = document.querySelector('.side-bar-button.Inbox');
  inboxButton.addEventListener('click', (e) => filterDisplay(e));
  // filter by day
  const todayButton = document.querySelector('.side-bar-button.Today');
  todayButton.addEventListener('click', (e) => filterDisplay(e, todoContainer.filterByDay()));
  // filter by week
  const weekButton = document.querySelector('.side-bar-button.Week');
  weekButton.addEventListener('click', (e) => filterDisplay(e, todoContainer.filterByWeek()));

  content.addEventListener('change', updateStorage);

  function displayProject(myContainer) {
    emptyContent(content);
    content.firstChild.style.display = 'block';
    let container = myContainer;
    if (!(container)) {
      container = (currentProject
        ? todoContainer.getProject(currentProject) : todoContainer.getContainer());
    }
    fillContent(container, content);
    linkContent();
  }
  function filterDisplay(e, container) {
    currentProject = '';
    displayProject(container);
    sideBar.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    if (container) {
      content.lastChild.style.display = 'none';
    }
  }
  function linkContent() {
    // link todo buttons to data structure
    const todoDisplays = document.querySelectorAll('.todo');
    todoDisplays.forEach((node) => {
      const deleteButton = node.querySelector('.delete');
      deleteButton.addEventListener('click', () => {
        todoContainer.removeTodoByUUID(node.dataset.uuid);
        content.removeChild(node);
        updateStorage();
      });
    });
  }
  function linkProjects() {
    // link project buttons to data structure
    const projectContainer = document.querySelector('.project-container');
    const projectDisplays = projectContainer.querySelectorAll('.project');
    projectDisplays.forEach((node) => {
      const openButton = node.querySelector('.open-project');
      openButton.addEventListener('click', () => {
        currentProject = openButton.textContent;
        sideBar.querySelector('.active').classList.remove('active');
        node.classList.add('active');
        displayProject();
      });
      const deleteButton = node.querySelector('.delete');
      deleteButton.addEventListener('click', () => {
        if (currentProject === openButton.textContent) {
          currentProject = '';
        }
        todoContainer.removeProject(openButton.textContent);
        displayProject();
        updateStorage();
        projectContainer.removeChild(node);
      });
    });
  }
  function updateStorage() {
    localStorage.setItem('todoContainer', JSON.stringify(todoContainer));
  }
})();
