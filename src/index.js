import * as game from './game';
import './index.css';

const handleColorBtnDown = (event) => {
  event.preventDefault();
  if (game.hasColorBtnsEnabled()) {
    game.receivePlayerColor(event.target.id);
  }
};

const handleColorBtnUp = (event) => {
  event.preventDefault();
  if (game.hasColorBtnsEnabled()) {
    game.playerColorReceived(event.target.id);
  }
};

function handleOnOffClick(event) {
  const countDiv = document.getElementById('countDiv');
  const onOffChildren = Array.from(event.currentTarget.children);
  this.blur();
  countDiv.classList.toggle('device-center__count-display--on');
  onOffChildren.forEach(child => child.classList.toggle('hidden'));
  if (game.isOn()) {
    game.turnOff();
  } else {
    game.turnOn();
  }
}

function handleStartClick() {
  this.blur();
  if (game.isOn()) {
    game.start();
  }
}

function handleStrictClick() {
  this.blur();
  if (game.isOn()) {
    game.toggleStrictMode();
  }
}

const colorBtns = Array.from(document.getElementById('device').children).slice(0, 4);
colorBtns.forEach((btn) => {
  btn.addEventListener('touchstart', handleColorBtnDown);
  btn.addEventListener('touchend', handleColorBtnUp);
  btn.addEventListener('mousedown', handleColorBtnDown);
  btn.addEventListener('mouseup', handleColorBtnUp);
});

document.getElementById('onOffBtn').addEventListener('click', handleOnOffClick);
document.getElementById('startBtn').addEventListener('click', handleStartClick);
document.getElementById('strictBtn').addEventListener('click', handleStrictClick);
