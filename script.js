const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;


let countTime;
let recordNum = 0;
let timesArr = [];
let hour = 0;
let minute = 0;
let second = 0;

const handleStart = () => {
  if(countTime >= 1) {
    clearInterval(countTime);
  }

  countTime = setInterval(() => {
    second++;

    if(second > 9) {
      if(hour === 0) {
        stopwatch.textContent = `${minute}:${second}`;
      } else {
        stopwatch.textContent = `${hour}:${minute}:${second}`;
      }
    } else {
      if(hour === 0) {
        stopwatch.textContent = `${minute}:0${second}`;
      } else {
        stopwatch.textContent = `${hour}:${minute}:0${second}`;
      }
    }

    if(second === 60) {
      minute++;
      second = 0;
    }

    if(minute === 60) {
      hour++;
      minute = 0;
      stopwatch.textContent 
    }
  }, 5);
}

const handlePause = () => {
  clearInterval(countTime);
}

const timeRecord = () => {
  recordNum++;
  const li = document.createElement('li')
  const span = document.createElement('span');
  span.textContent = stopwatch.textContent;
  li.textContent = `Pomiar nr ${recordNum}:`;
  li.appendChild(span);
  timeList.appendChild(li);
}

const handleStop = () => {
  time.textContent = `Ostatni czas: ${stopwatch.textContent}.`;
  timesArr.push(stopwatch.textContent);

  if(stopwatch.textContent !== '0:00') {
    time.style.visibility = 'visible';
    timeRecord();
  }

  clearInterval(countTime);
  stopwatch.textContent = '0:00';
  hour = 0;
  minute = 0;
  second = 0;
}

const handleReset = () => {
  clearInterval(countTime)
  time.style.visibility = 'hidden';
  time.textContent = '0:00';
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  recordNum = 0;
  hour = 0;
  minute = 0;
  second = 0;
}

const handleHistory = () => {
  timeList.classList.toggle('visibility');
}

const toggleInfo = () => {
  modalShadow.classList.toggle('visibility');
}

const toggleColors = () => {
  colorPanel.classList.toggle('show-colors');
}


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', handleHistory)

infoBtn.addEventListener('click', toggleInfo)
closeModalBtn.addEventListener('click', toggleInfo);

colorBtn.addEventListener('click', toggleColors);
colorOne.addEventListener('click', () => {
  root.style.setProperty('--first-color', "rgb(250, 20, 6)");
});
colorTwo.addEventListener('click', () => {
  root.style.setProperty('--first-color', "rgb(6, 173, 250)");
});
colorThree.addEventListener('click', () => {
  root.style.setProperty('--first-color', "rgb(0, 255, 42)");
});