import vimeo from '@vimeo/player'; 
import lodash, { throttle } from 'lodash';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(setVideoTime, 1000))
     function setVideoTime() {
        // console.log('played the video!');
        player.getCurrentTime().then(function(seconds) {
        // console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
        })
    };

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);

