import { plusThick } from '../assets';

const AddNewDisplay = (objectType) => {
  const addNewDisplay = (() => {
    const result = document.createElement('div');
    result.classList.add(`add-${objectType}-container`, 'add-new-container', 'inactive');
    result.toggle = () => {
      result.classList.toggle('active');
      result.classList.toggle('inactive');
    };
    return result;
  })();

  // create button to open popup
  const newBtn = (() => {
    const button = document.createElement('button');
    button.classList.add('open-popup');

    const icon = document.createElement('svg');
    button.innerHTML = plusThick;

    //const textDiv = document.createElement('div');
    //textDiv.textContent = `Add new ${objectType}`;

    button.append(icon);
    button.addEventListener('click', () => {
      addNewDisplay.toggle();
      document.forms[`${objectType}Popup`].title.focus();
    });
    return button;
  })();

  // create popup
  const popUp = (() => {
    const result = document.createElement('form');
    result.classList.add('popup');
    result.name = `${objectType}Popup`;
    result.addEventListener('submit', addNewDisplay.toggle);

    const titleField = document.createElement('input');
    titleField.setAttribute('type', 'text');
    titleField.name = 'title';
    titleField.placeholder = `Add a new ${objectType}`;
    titleField.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = '+';

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'reset');
    cancelBtn.classList.add('cancel');
    cancelBtn.textContent = '🛇';
    cancelBtn.addEventListener('click', addNewDisplay.toggle);

    result.append(titleField, submitBtn, cancelBtn);
    return result;
  })();

  // add button and popup to display div
  addNewDisplay.append(newBtn, popUp);
  return addNewDisplay;
};
export default AddNewDisplay;
