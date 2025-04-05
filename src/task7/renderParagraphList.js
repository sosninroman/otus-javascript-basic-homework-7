const MAX_PARAGRAPPHS = 5;

export function renderParagraphList(el) {
  const input = document.createElement('input');
  input.classList.add('par-input');
  const addButton = document.createElement('button');
  addButton.innerHTML = 'Add';
  addButton.hidden = true;
  addButton.classList.add('add-btn');
  const list = document.createElement('div');
  list.classList.add('par-list');

  el.appendChild(input);
  el.appendChild(addButton);
  el.appendChild(list);

  const validateAddButtonVisibility = () => {
    addButton.hidden = !input.value || !input.value.length;
  };

  const appendNewParagraph = () => {
    const el = document.createElement('p');
    el.innerHTML = input.value;
    list.appendChild(el);
  };

  const clearInput = () => {
    input.value = '';
    validateAddButtonVisibility();
  };

  const checkContent = () => {
    while (list.children.length > MAX_PARAGRAPPHS) {
      list.removeChild(list.firstChild);
    }
  };

  addButton.addEventListener('click', () => {
    appendNewParagraph();
    clearInput();
    checkContent();
  });

  input.addEventListener('input', () => {
    validateAddButtonVisibility();
  });
}
