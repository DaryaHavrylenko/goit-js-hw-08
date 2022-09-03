import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data = {}) {
  console.log(data.seconds);
 localStorage.setItem(STORAGE_KEY, data.seconds);
   
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);
if (currentTime) {
    player.setCurrentTime(currentTime);
}

  
