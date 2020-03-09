//counter
let msTensCount = 0;
let msHundredsCount = 0;
let secondOnesCount = 0;
let secondTensCount = 0;

//select the elements
let msTensDiv = document.getElementById("msTens");
let msHundredsDiv = document.getElementById("msHundreds");
let secondOnesDiv = document.getElementById("secondOnes");
let secondTensDiv = document.getElementById("secondTens");
let startPause = document.getElementById("start-stop");
let resetBtn = document.getElementById("reset-btn");
let clockOn = false;
let timer;

startPause.addEventListener("click", e => {
  clockOn = !clockOn;
  if (clockOn) {
    runTimer();
    e.target.textContent = "Stop";
  } else {
    window.clearInterval(timer);
    e.target.textContent = 'Start';
  }
});

const runTimer = () => {
  timer = setInterval(() => {
    msTensCount++;
    if (msTensCount > 9) {
      msTensCount = 0;
      msTensDiv.textContent = parseInt(msTensCount);
      msHundredsCount++;
      msHundredsDiv.textContent = parseInt(msHundredsCount);
    }
  });
};
