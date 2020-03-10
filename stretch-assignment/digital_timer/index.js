//counter
const getTimeParts = elapseTime => {
  const secondTens = Math.floor(elapseTime / 10000);
  elapseTime -= secondTens * 10000;
  const second = Math.floor(elapseTime / 1000);
  elapseTime -= second * 1000;
  const msHundreds = Math.floor(elapseTime / 100);
  elapseTime -= msHundreds * 100;
  const msTens = Math.floor(elapseTime / 10);

  return [secondTens, second, msHundreds, msTens];
};

//select the elements
let msTensDiv = document.getElementById("msTens");
let msHundredsDiv = document.getElementById("msHundreds");
let secondOnesDiv = document.getElementById("secondOnes");
let secondTensDiv = document.getElementById("secondTens");
let startPause = document.getElementById("start-stop");
let resetBtn = document.getElementById("reset-btn");
let timePassed = 0;
let timer;

startPause.addEventListener("click", e => {
  if (e.target.textContent === "Start") {
    Array.from(document.getElementsByClassName("digit")).forEach(child => {
      child.style.color = "black";
    });
    runTimer();
    e.target.textContent = "Stop";
  } else if (e.target.textContent === "Stop") {
    clockOn = false;
    window.clearInterval(timer);
    e.target.textContent = "Start";
  }
});

resetBtn.addEventListener("click", () => {
  resetTimer();
  Array.from(document.querySelector(".digits").children).forEach(child => {
    if (child.id === "colon") {
      child.textContent = ":";
    } else {
      child.textContent = "-";
    }
  });
});

const resetTimer = () => {
  timePassed = 0;
  Array.from(document.getElementsByClassName("digit")).forEach(child => {
    child.style.color = "black";
  });
};
const runTimer = () => {
  timer = setInterval(() => {
    timePassed += 10;
    const [secondTens, second, msHundreds, msTens] = getTimeParts(timePassed);
    secondTensDiv.textContent = secondTens;
    secondOnesDiv.textContent = second;
    msHundredsDiv.textContent = msHundreds;
    msTensDiv.textContent = msTens;
    //when timePassed is 10 seconds. stop the counter
    if (timePassed >= 10000) {
      Array.from(document.getElementsByClassName("digit")).forEach(child => {
        child.style.color = "red";
      });
      clearInterval(timer);
      timePassed = 0;
      startPause.textContent = "Start";
    }
  }, 10);
};
