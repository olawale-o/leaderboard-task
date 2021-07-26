const createInput = (name, id, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', name);
  input.setAttribute('class', 'input');
  input.setAttribute('id', id);
  input.setAttribute('placeholder', placeholder);
  return input;
};

const createButton = (text) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.setAttribute('id', 'add-score');
  button.setAttribute('type', 'submit');
  button.textContent = text;
  return button;
};

const createField = (child) => {
  const field = document.createElement('div');
  field.setAttribute('class', 'field');
  field.append(child);
  return field;
};

const createScoreForm = () => {
  const form = document.getElementById('form');
  const nameInput = createInput('name', 'your-name', 'Your name');
  const scoreInput = createInput('score', 'your-score', 'Your score');
  const nameField = createField(nameInput);
  const scoreField = createField(scoreInput);
  const button = createField(createButton('Submit'));

  form.append(nameField, scoreField, button);
};

export default createScoreForm;