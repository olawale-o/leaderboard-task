import './stylesheets/style.css';
import createScorePanelHeader from './score-panel.js';
import createScoreForm from './score-form.js';
import {
  parseResponse, fetchScore, refreshScore, createGame,
} from './utils.js';
import updateDomWithScores from './dom.js';

window.addEventListener('load', async () => {
  const scores = document.getElementById('scores');
  const header = document.getElementById('score-form-header');
  header.textContent = 'Add your score';
  createScorePanelHeader();
  createScoreForm();
  const GAMESNAME = {
    name: 'wale-leaderboard-microverse',
  };
  const { result } = await createGame(GAMESNAME);
  const gameId = parseResponse(result);

  const addButton = document.getElementById('add-score');
  const refreshButton = document.getElementById('refresh-score');
  const user = document.getElementById('your-name');
  const score = document.getElementById('your-score');

  addButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const data = {
      user: user.value.trim(),
      score: score.value.trim(),
    };
    const postData = {
      data,
      gameId,
    };
    await fetchScore(postData);
    user.value = '';
    score.value = '';
    const { result } = await refreshScore(gameId);
    updateDomWithScores(scores, result);
    user.focus();
  });

  refreshButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const { result } = await refreshScore(gameId);
    updateDomWithScores(scores, result);
  });
});