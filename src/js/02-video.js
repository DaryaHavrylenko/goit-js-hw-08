import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function () {
  const timeupdate = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate));
};
onPlay();
player.on('play', onPlay);

iframe.addEventListener('timeupdate', onPlay);

let timeVideo;
player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
    seconds = localStorage.setItem(STORAGE_KEY);
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            timeVideo <= 0;
            break;

        default:
            // console.error('error');
            break;
    }
});