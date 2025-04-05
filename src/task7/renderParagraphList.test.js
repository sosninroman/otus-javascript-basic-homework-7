import { renderParagraphList } from './renderParagraphList';

describe('renderParagraphList', () => {
  let container;
  let input;
  let addButton;
  let list;

  function setInputValue(val) {
    input.value = val;
    input.dispatchEvent(new Event('input'));
  }

  function clickAddButton() {
    addButton.dispatchEvent(new Event('click'));
  }

  function getParagraphs() {
    return [...list.querySelectorAll('p')].map((el) => el.innerHTML);
  }

  function addParagraph(text) {
    setInputValue(text);
    clickAddButton();
  }

  beforeEach(() => {
    container = document.createElement('div');
    renderParagraphList(container);
    input = container.querySelector('input.par-input');
    addButton = container.querySelector('button.add-btn');
    list = container.querySelector('div.par-list');
  });

  test('Создает кнопку, поле ввода и список для заполнения', () => {
    expect(input).not.toBe(null);
    expect(addButton).not.toBe(null);
    expect(list).not.toBe(null);
  });

  test('Кнопка добавления видна только при наличии текста в поле ввода', () => {
    expect(addButton.hidden).toBe(true);
    setInputValue('text');
    expect(addButton.hidden).toBe(false);
    setInputValue('');
    expect(addButton.hidden).toBe(true);
  });

  test('При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода', () => {
    setInputValue('text');
    clickAddButton();
    expect(getParagraphs()).toEqual(['text']);
  });

  test('После добавления нового элемента поле ввода очищается, а кнопка становится невидимой', () => {
    setInputValue('text');
    clickAddButton();
    expect(input.value).toHaveLength(0);
    expect(addButton.hidden).toBe(true);
  });

  test('Если параграфов становится больше 5, первый из них удаляется', () => {
    addParagraph('1');
    addParagraph('2');
    addParagraph('3');
    addParagraph('4');
    addParagraph('5');
    expect(getParagraphs()).toEqual(['1', '2', '3', '4', '5']);
    addParagraph('6');
    expect(getParagraphs()).toEqual(['2', '3', '4', '5', '6']);
  });
});
