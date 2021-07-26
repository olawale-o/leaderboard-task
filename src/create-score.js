const createScores = (target, scoresArray) => {
  scoresArray.forEach((_, i) => {
    const li = document.createElement('li');
    li.textContent = `Name: ${i}`;
    target.appendChild(li);
  });
};

export default createScores;