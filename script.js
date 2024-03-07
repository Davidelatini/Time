let timeInSeconds = 60; // Tempo in secondi
let timerInterval;
const progressBar = document.getElementById('progress');

document.addEventListener('DOMContentLoaded', function() {
  startTimer();
});

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  document.getElementById('timer').textContent = formattedTime;

  // Aggiorna la barra di avanzamento
  const progress = (timeInSeconds / 60) * 100;
  progressBar.style.clip = `rect(0, 100px, 100px, ${100 - progress}px)`;

  if (timeInSeconds === 0) {
    clearInterval(timerInterval);
    alert('Tempo scaduto!');
  } else {
    timeInSeconds--;
  }
}
