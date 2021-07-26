import './stylesheets/style.css';
import createScores from './create-score.js';
import createScorePanelHeader from './score-panel.js';
import createScoreForm from './score-form.js';

window.addEventListener('load', () => {
  const scores = document.getElementById('scores');
  const header = document.getElementById('score-form-header');
  header.textContent = 'Add your score';
  const scoresArray = new Array(10).fill(0);
  createScores(scores, scoresArray);
  createScorePanelHeader();
  createScoreForm();
});