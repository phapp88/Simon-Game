import playAudio from './playAudio';

// state
let colorBtnsEnabled = false;
let colorSequence = [];
const flickerDuration = 250;
let lightOnTime = 600;
let on = false;
let timeouts = [];
let tookTooLong = null;
let playerSequence = [];
let strict = false;

// private method declarations
let addToColorSequence;
let disableColorBtns;
let enableColorBtns;
let flickerCountTxt;
let handleFailure;
let handleWin;
let playColorSequence;
let reset;
let sequencesAreEqual;
let setTookTooLong;
let waitForPlayer;

// async wrapper
const async = (fn, delay) => timeouts.push(setTimeout(fn, delay));

// public methods
export const hasColorBtnsEnabled = () => colorBtnsEnabled;

export const isOn = () => on;

export const playerColorReceived = (color) => {
  document.getElementById(color).classList.remove(`device__button--${color}-on`);
  if (sequencesAreEqual()) {
    disableColorBtns();
    if (colorSequence.length === 20) {
      handleWin(color);
    } else {
      addToColorSequence();
      async(playColorSequence, 750);
      const playSeqDuration = 2 * colorSequence.length * lightOnTime;
      async(waitForPlayer, 750 + playSeqDuration);
    }
  } else {
    setTookTooLong();
  }
};

export const receivePlayerColor = (color) => {
  const colorDiv = document.getElementById(color);
  colorDiv.classList.add(`device__button--${color}-on`);
  clearTimeout(tookTooLong);
  playAudio(color);
  playerSequence.push(color);
  if (color !== colorSequence[playerSequence.length - 1]) {
    colorDiv.classList.remove(`device__button--${color}-on`);
    handleFailure();
  }
};

export const start = () => {
  colorSequence = [];
  lightOnTime = 600;
  reset();
  flickerCountTxt();
  addToColorSequence();
  async(playColorSequence, 4 * flickerDuration);
  const playSeqDuration = 2 * colorSequence.length * lightOnTime;
  async(waitForPlayer, (4 * flickerDuration) + playSeqDuration);
};

export const toggleStrictMode = () => {
  const strictDiv = document.getElementById('strictLight');
  strictDiv.classList.toggle('device-center__strict-light--on');
  strict = !strict;
};

export const turnOff = () => {
  on = false;
  if (strict) {
    const strictDiv = document.getElementById('strictLight');
    strictDiv.classList.remove('device-center__strict-light--on');
  }
  reset();
};

export const turnOn = () => { on = true; };

// private method definitions
addToColorSequence = () => {
  const colors = ['blue', 'green', 'red', 'yellow'];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  colorSequence.push(nextColor);
  if (colorSequence.length === 5 ||
      colorSequence.length === 9 ||
      colorSequence.length === 13) {
    lightOnTime -= 100;
  }
};

disableColorBtns = () => {
  const colorBtns = Array.from(document.getElementById('device').children).slice(0, 4);
  colorBtns.forEach(btn => btn.classList.remove('device__button--on'));
  colorBtnsEnabled = false;
};

// eslint-disable-next-line prefer-const
enableColorBtns = () => {
  const colorBtns = Array.from(document.getElementById('device').children).slice(0, 4);
  colorBtns.forEach(btn => btn.classList.add('device__button--on'));
  colorBtnsEnabled = true;
};

flickerCountTxt = () => {
  const countDiv = document.getElementById('countDiv');
  for (let i = 0; i < 4; i++) {
    async(
      () => countDiv.classList.toggle('device-center__count-display--on'),
      i * flickerDuration,
    );
  }
};

handleFailure = () => {
  const countDiv = document.getElementById('countDiv');
  countDiv.textContent = '!!';
  disableColorBtns();
  playAudio('all');
  if (strict) {
    start();
  } else {
    const playSeqDuration = 2 * colorSequence.length * lightOnTime;
    flickerCountTxt();
    async(playColorSequence, 4 * flickerDuration);
    async(waitForPlayer, (4 * flickerDuration) + playSeqDuration);
  }
};

handleWin = (color) => {
  const countDiv = document.getElementById('countDiv');
  countDiv.textContent = '**';
  for (let i = 0; i < 6; i++) {
    async(() => {
      playAudio(color);
      countDiv.classList.toggle('device-center__count-display--on');
    }, i * flickerDuration);
  }
  async(() => { countDiv.textContent = '--'; }, 6000);
};

playColorSequence = () => {
  document.getElementById('countDiv').textContent = colorSequence.length;
  playerSequence = [];
  colorSequence.forEach((color, i) => {
    const colorDiv = document.getElementById(color);
    const onClassName = `device__button--${color}-on`;
    async(() => {
      colorDiv.classList.add(onClassName);
      playAudio(color);
    }, ((2 * i) + 1) * lightOnTime);
    async(
      () => colorDiv.classList.remove(onClassName),
      ((2 * i) + 2) * lightOnTime,
    );
  });
};

reset = () => {
  const colors = ['blue', 'green', 'red', 'yellow'];
  colors.forEach((color) => {
    document.getElementById(color).classList.remove(`device__button--${color}-on`);
  });
  disableColorBtns();
  document.getElementById('countDiv').textContent = '--';
  timeouts.forEach(timeout => clearTimeout(timeout));
  timeouts = [];
};

sequencesAreEqual = () => (
  colorSequence.length === playerSequence.length &&
  colorSequence.every((val, i) => val === playerSequence[i])
);

setTookTooLong = () => {
  tookTooLong = setTimeout(handleFailure, lightOnTime * 5);
  timeouts.push(tookTooLong);
};

waitForPlayer = () => {
  enableColorBtns();
  setTookTooLong();
};
