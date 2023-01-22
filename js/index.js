// task 3. Замыкания
// Каждый раз, когда вы нажимаете кнопку **Start game**, она вызывает функции `startGame()` и `logAnalytics()`. Обновите прослушиватель событий, чтобы он вызывал `startGame()` только один раз, но продолжал вызывать `logAnalytics()` каждый раз. Вывод должен быть в консоли.

const button = document.querySelector("#app-button");
let isGameStarted = false;

button.addEventListener("click", function () {
  if (isGameStarted) {
    return logAnalytics();
  }

  startGame();
  isGameStarted = true;
  logAnalytics();
});

// do not modify
function startGame() {
  console.log("game started!");
}

// do not modify
function logAnalytics() {
  console.log("log analytics");
}
