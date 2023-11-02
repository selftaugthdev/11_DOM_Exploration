const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
console.log(actionSquares)

//TODO: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

// Get the displayedSquare wrapper
let displayedSquare = document.querySelector('.displayedsquare-wrapper');

// Check if a square was clicked and its color is in the actionSquares
const isSquareColorValid = (color) => {
    return ['green', 'violet', 'orange'].includes(color);
  }
  
  // Function to create a new displayed square with the clicked color
  const createDisplayedSquare = (color) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('displayedsquare', color);
    displayedSquare.appendChild(newDiv);
  }

  // TODO: Create a new <li> in the log below to state when the action was done
    //get the log element
    function logEvent(action) {
        let actionLog = document.querySelector("ul")
        console.log(actionLog)
        //create LI element
        let newLi = document.createElement("li")
        // Append LI to the log
        newLi.textContent = `[${getElapsedTime()}] ${action}`;
        actionLog.appendChild(newLi)
        }
  
  // Listen for clicks on actionSquares
  for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', (e) => {
      const clickedColor = e.target.classList[1];
      if (isSquareColorValid(clickedColor)) {
        createDisplayedSquare(clickedColor);
      }
      console.log(clickedColor);
      console.log(getElapsedTime());
      logEvent(`[${getElapsedTime()}] Created a new ${clickedColor} square`)
    });
  }

function getRandomColor() {
    // Generate a random color using RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const colorData = luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255)

    // Return the CSS color string
    return `rgb(${r},${g},${b})`;
}

let body = document.querySelector("body")

body.addEventListener('keydown', function(e) {
    if (e.key === ' ') { 
        body.style.backgroundColor = getRandomColor();
    }
    logEvent('Changed the background color');
});


  