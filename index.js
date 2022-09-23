import Dog from './Dog.js';
import dogsData from './data.js';
import dogs from './data.js';
let isWaiting = false;
let currentDogIndex = 0;
let isLoved = 0;
let notLoved = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
document.getElementById('accept-button').addEventListener('click', yes);
document.getElementById('reject-button').addEventListener('click', no);

render();

function render() {
  document.getElementById('card').innerHTML = currentDog.getDogHtml();
}

function renderEnd() {
    document.getElementById('card').innerHTML = 
        ` <div = class="render-end">
          <h1>Pups loved ${isLoved}</h1>
          <img src="images/logo.png">
      </div>    `;
  }

function getNewDog() {
  if (!isWaiting) {
    isWaiting = true;

  
    if (currentDog.hasBeenSwiped && currentDog.hasBeenLiked) {
      document.getElementById('like-badge').style.display = 'block';
      isLoved++
    } else if (currentDog.hasBeenSwiped) {
      document.getElementById('nope-badge').style.display = 'block';
      notLoved++
    }
    currentDogIndex += 1;
    currentDog = new Dog(dogsData[currentDogIndex]);
    setTimeout(() => {
      if (currentDogIndex < dogsData.length) {
        render();
      } else {
        renderEnd();
      }
      isWaiting = false;
    }, 1500);
  }
}


function yes() {
  currentDog.setMatchStatus(true);
  getNewDog();
}

function no() {
  currentDog.setMatchStatus(false);
  getNewDog();
}
