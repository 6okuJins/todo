import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  onSnapshot,
  getDoc
} from 'firebase/firestore';
import getFirebaseConfig from './firebase-config';
import { Todo } from './classes';
import {
  fillContent, renderPage, loadStorage, emptyContent,
} from './functions';
import './styles';

const Controller = (() => {
  // render the page and store the sideBar and content nodes
  const { sideBar, content } = renderPage();
  let todoContainer;
  let currentProject;
  const headerProjectDisplay = document.querySelector('.header>.project-title');
  const ruler = document.querySelector('.rounded');
  
  function onLoad() {
    const currActive = document.querySelector('.active');
    if (currActive) {
      currActive.classList.remove('active');
    }
    currentProject = '';
    const inbox = sideBar.querySelector('.Inbox');
    inbox.classList.add('active');
    emptyContent(content);
    sideBar.emptySideBar();
    fillContent(todoContainer.getContainer(), content);
    sideBar.fillSideBar(todoContainer.getAllProjects());
    linkContent();
    linkProjects();
  }
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
    currentProject = document.forms.projectPopup.title.value;
    updateStorage();
    sideBar.emptySideBar();
    sideBar.fillSideBar(todoContainer.getAllProjects());
    linkContent();
    const currActive = sideBar.querySelector('.active') || document.querySelector('.project-container>.active');
    if (currActive) {
      currActive.classList.remove('active');
    }
    linkProjects();
    displayProject();
    e.target.reset();
  });
  // show all
  const inboxButton = document.querySelector('.side-bar-button.Inbox');
  inboxButton.addEventListener('click', (e) => {
    filterDisplay(e);
    headerProjectDisplay.textContent = 'Inbox';
    headerProjectAnimation();
  });
  // filter by day
  const todayButton = document.querySelector('.side-bar-button.Today');
  todayButton.addEventListener('click', (e) => {
    filterDisplay(e, todoContainer.filterByDay());
    headerProjectDisplay.textContent = 'Today';
    headerProjectAnimation();
  });
  // filter by week
  const weekButton = document.querySelector('.side-bar-button.Week');
  weekButton.addEventListener('click', (e) => {
    filterDisplay(e, todoContainer.filterByWeek());
    headerProjectDisplay.textContent = 'This Week';
    headerProjectAnimation();
  });

  content.addEventListener('change', updateStorage);

  function displayProject(myContainer) {
    if (currentProject) {
      headerProjectDisplay.textContent = currentProject;
      headerProjectAnimation();
    }
    emptyContent(content);
    content.firstChild.style.display = 'flex';
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
    const currActive = sideBar.querySelector('.active');
    if (currActive) {
      currActive.classList.remove('active');
    }
    // THIS IS ABSOLUTELY POG
    e.currentTarget.classList.add('active');
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
    const todoProjectBtns = document.querySelectorAll('.todo button.open-project');
    todoProjectBtns.forEach((node) => {
      node.addEventListener('click', (e) => {
        currentProject = e.currentTarget.lastChild.textContent;
        displayProject();
        const sideBarActive = document.querySelector('.side-bar .active');
        if (sideBarActive) {
          sideBarActive.classList.remove('active');
        }
        const newActive = document.querySelector(`.project-container .project[data-project="${currentProject}"]`);
        newActive.classList.add('active');
      });
    });
  }
  function linkProjects() {
    // link project buttons to data structure
    const projectContainer = document.querySelector('.project-container');
    const projectDisplays = projectContainer.querySelectorAll('.project');
    projectDisplays.forEach((node) => {
      const openButton = node.querySelector('.open-project');
      if (openButton.textContent === currentProject) {
        node.classList.add('active');
      }
      openButton.addEventListener('click', () => {
        currentProject = openButton.textContent;
        const currActive = sideBar.querySelector('.active') || projectContainer.querySelector('.active');
        if (currActive) {
          currActive.classList.remove('active');
        }
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
  function headerProjectAnimation() {
    ruler.classList.add('animate');
    setTimeout(() => ruler.classList.remove('animate'), 0);
  }
  // FIREBASE
  // setup firebase
  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig, 'Todo');
  const auth = getAuth(app);
  // setup sign in persistence
  (async () => {
    await setPersistence(auth, browserLocalPersistence);
  })();

  onAuthStateChanged(auth, async (user) => {
    let cloudContainer;

    if (user) {
      // set todoContainer to firestore database
      const db = getFirestore(app);

      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      cloudContainer = docSnap;
      signInHandler();
    } else {
    }
    todoContainer = loadStorage(cloudContainer);
    onLoad();
    headerProjectDisplay.textContent = 'Inbox';
    headerProjectAnimation();
    const inboxBtn = document.querySelector('.Inbox');
    inboxBtn.classList.add('active');
  });

  const signInButtons = document.querySelectorAll('.google-sign-in, .open-modal');
  const signOutBtn = document.querySelector('.sign-out');
  const profileDisplay = document.querySelector('.profile-display');
  const googleBtn = document.querySelector('.google-sign-in');
  const phoneBtn = document.querySelector('.open-modal');
  const importLocal = document.querySelector('.import-local');

  importLocal.addEventListener('click', async () => {
    const db = getFirestore(app);
    const docRef = doc(db, 'Users', auth.currentUser.uid);
    const outgoing = JSON.parse(localStorage.getItem('todoContainer'));
    setDoc(docRef, outgoing, { merge: true });
    const docSnap = await getDoc(docRef);
    todoContainer = loadStorage(docSnap);
    onLoad();
  });
  signOutBtn.addEventListener('click', signOutHandler );
  googleBtn.addEventListener('click', signInGoogle);

  async function signInGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    signInHandler();
  }
  function signInHandler() {
    if (auth.currentUser) {
      signInButtons.forEach((button) => { button.style.display = 'none'; });
      profileDisplay.style.display = 'flex';
      profileDisplay.lastChild.textContent = auth.currentUser.displayName;
      signOutBtn.style.display = 'flex';
      importLocal.style.display = 'flex';
      if (auth.currentUser.photoURL) {
        profileDisplay.firstChild.src = auth.currentUser.photoURL;
      }
    }
  }
  function signOutHandler() {
    signInButtons.forEach((button) =>{ button.style.display = 'flex'; });
    profileDisplay.style.display = 'none';
    signOutBtn.style.display = 'none';
    importLocal.style.display = 'none';
    signOut(auth);
  }

  function updateStorage() {
    if (auth.currentUser) {
      const db = getFirestore(app);
      const docRef = doc(db, 'Users', auth.currentUser.uid);
      const outgoing = JSON.parse(JSON.stringify(todoContainer));
      // test merge
      setDoc(docRef, outgoing, { merge: true });
    } else {
      localStorage.setItem('todoContainer', JSON.stringify(todoContainer));
    }
  }
})();
