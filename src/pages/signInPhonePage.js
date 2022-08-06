const signInPhonePage = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modal-content');
  modal.append(content);

  //content
  const phoneForm = document.createElement('form');
  phoneForm.classList.add('phone-form');
  phoneForm.name = 'phoneForm';
  content.append(phoneForm);
  phoneForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  //phone form
  const phoneField = document.createElement('input');
  phoneField.setAttribute('type', 'tel');
  phoneField.name = 'phone';
  phoneField.required = true;
  phoneField.placeholder = 'Phone Number';
  phoneForm.append(phoneField);

  const codeForm = document.createElement('form');
  codeForm.classList.add('code-form');
  codeForm.name = 'codeForm';
  content.append(codeForm);

  const codeField = document.createElement('input');
  codeField.setAttribute('type', 'text');
  codeField.name = 'code';
  codeField.required = true;
  codeField.placeholder = 'Verification Code';
  codeForm.append(codeField);

  const close = document.createElement('span');
  close.classList.add('close');
  content.append(close);
  close.textContent = 'Close';
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  return modal;
};
export default signInPhonePage;
