import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

const onPlay = e => localStorage.setItem('videoplayer-current-time', e.seconds);

const currentTime = localStorage.getItem('videoplayer-current-time');
currentTime ? iframePlayer.setCurrentTime(currentTime) : null;


iframePlayer.on('timeupdate', throttle(onPlay, 1000));
