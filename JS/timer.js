//getting the inner height of the viewport for css:
let vh = window.innerHeight * 0.01;

const timeH = document.getElementById('countdown');
const breakSound = document.getElementById('break-sound');
const startButton = document.getElementById('start');

const containerElement = document.querySelector('container');

const innerCircleElement = document.getElementById('inner-circle');
const displayButtonElement = document.getElementById('display');
//site favicon
const icon = document.getElementById('site-icon');

let informationElements = document.getElementsByClassName('information');


let timeSecond = 1500;
// let num = 0.06666666666;
let num = 0;






function startPomodoro() {
    startButton.style.display = 'none';
 
    informationElements[0].style.display = 'none';
    informationElements[1].style.display = 'none';
    informationElements[2].style.display = 'none';

  if (startButton.innerHTML == 'Start') {
    startButton.innerHTML = 'Focus';
  }

    // Expending inner-circle div until its width equals outer container:
      const expand = setInterval(function (){ 
        num += 0.06666666666;
        
        
      
        innerCircleElement.style.width = num + '%';
        innerCircleElement.style.height = num + '%';

        if (num > 100) {
            clearInterval(expand);
            // changes the favicon to red-circle to indicate that the time has run out!
            icon.href = "/images/red-favicon.ico";
          }

      },1000);

   



  // timeH.innerHTML = `00:${timeSecond}`;
  displayTime(timeSecond);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);

    if (timeSecond <= 0 || timeSecond < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);

  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${
      sec < 10 ? '0' : ''
    }${sec}`;
  }

  function endTime() {
    timeH.innerHTML = 'Break';

    breakSound.play();
  }
}

startButton.addEventListener('click', startPomodoro);



// change the display from digital clock to visual circle:
function changeDisplay() {

    if (timeH.style.display !== 'none') {
        timeH.style.display = 'none';
        innerCircleElement.style.display = 'block';
    } else {
        timeH.style.display = 'block';
        innerCircleElement.style.display = 'none';
    }
}

displayButtonElement.addEventListener('click', changeDisplay);
