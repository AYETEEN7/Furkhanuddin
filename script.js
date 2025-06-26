let score = 0;
let lives = 3;
let boxTimer;

function startGame() {
  score = 0;
  lives = 3;
  document.getElementById("score").textContent = score;
  document.getElementById("lives").textContent = lives;
  showBox();
}

function showBox() {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = "";

  const box = document.createElement("div");
  box.classList.add("box");

  const max = 260;
  const randomX = Math.floor(Math.random() * max);
  const randomY = Math.floor(Math.random() * max);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;

  box.onclick = () => {
    score++;
    document.getElementById("score").textContent = score;
    clearTimeout(boxTimer);
    showBox();
  };

  gameArea.appendChild(box);

  boxTimer = setTimeout(() => {
    lives--;
    document.getElementById("lives").textContent = lives;
    if (lives > 0) {
      showBox();
    } else {
      gameOver();
    }
  }, 1200); // 1.2 seconds to click
}

function gameOver() {
  alert("Game Over! Your score: " + score);
  document.getElementById("game-area").innerHTML = "";
}
