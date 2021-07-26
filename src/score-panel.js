const createScorePanelHeader = () => {
  const header = document.getElementById('score-panel-header');
  const h2 = document.createElement('h2');
  h2.textContent = 'Recent scores';
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.setAttribute('id', 'refresh-score');
  button.textContent = 'Refresh';
  header.append(h2, button);
};

export default createScorePanelHeader;