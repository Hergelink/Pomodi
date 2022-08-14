const timeH = document.getElementById('countdown');
const breakSound = document.getElementById('break-sound');

const containerElement = document.querySelector('container');

let timeSecond = 1500;


// timeH.innerHTML = `00:${timeSecond}`;
displayTime(timeSecond);

const countDown = setInterval(() => {
    
    timeSecond--;
    displayTime(timeSecond);


    if (timeSecond <= 0 || timeSecond < 1) {
    
        endTime();
        clearInterval(countDown)
    }
},1000)

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`;
}

function endTime() {
    timeH.innerHTML = 'Break';
    
    breakSound.play();
}

containerElement.addEventListener('click', startCountdown);

function startCountdown() {
    displayTime(second);
}



