import blueAudio from './assets/audio/simonSoundBlue.mp3';
import greenAudio from './assets/audio/simonSoundGreen.mp3';
import redAudio from './assets/audio/simonSoundRed.mp3';
import yellowAudio from './assets/audio/simonSoundYellow.mp3';

const colorAudio = {
  blue: blueAudio,
  green: greenAudio,
  red: redAudio,
  yellow: yellowAudio,
};

const playAudio = (color) => {
  if (color === 'all') {
    const colors = ['blue', 'green', 'red', 'yellow'];
    colors.forEach(playAudio);
  }
  const audio = new Audio(colorAudio[color]);
  audio.currentTime = 0;
  audio.play();
};

export default playAudio;
