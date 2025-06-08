let score = 0;
const box = document.getElementById("box");
const scoreboard = document.getElementById("scoreboard");

function moveBox() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

box.addEventListener("click", () => {
  score++;
  scoreboard.textContent = `得分：${score}`;
  moveBox();
});

// 初始顯示
moveBox();
