const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const body = document.querySelector("body")

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
const displayedSquare = document.querySelector('.displayedsquare-wrapper');

// Check if a square was clicked and its color is in the actionSquares
const isSquareColorValid = (color) => {
    return ['green', 'violet', 'orange'].includes(color);
  }
  
  // Function to create a new displayed square with the clicked color
    const createDisplayedSquare = (color) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('displayedsquare', color);
    displayedSquare.appendChild(newDiv);

    // Add a click event listener to the generated square
    newDiv.addEventListener("click", () => {
    showAlert(color);
  });
  }

  //get the log element
let actionLog = document.querySelector("ul")

// TODO: Create a new <li> in the log below to state when the action was done
function logEvent(action) {
    //create LI element
    let newLi = document.createElement("li")
    // Append LI to the log
    newLi.textContent = `[${getElapsedTime()}] ${action}`;
    actionLog.appendChild(newLi)
}

// Event listener for the spacebar key
body.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      body.style.backgroundColor = getRandomColor();
      logEvent('Changed the background color');
    }
  
    // Event listener to clear the log when the "i" key is pressed
    if (e.key === 'i') {
      while (actionLog.firstChild) {
        actionLog.removeChild(actionLog.firstChild);
      }
    }

    // Event listener to clear the squares when the "s" key is pressed
    if (e.key === 's') {
        while (displayedSquare.firstChild) {
            displayedSquare.removeChild(displayedSquare.firstChild);
        }
      }
});


function showAlert(color) {
    alert(color)
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

//     body.addEventListener('keydown', function(e) {
//     if (e.key === ' ') { 
//         body.style.backgroundColor = getRandomColor();
//         logEvent('Changed the background color');
//     }

//     if (e.key === 'i') {
//         while (actionLog.firstChild) {
//             actionLog.removeChild(actionLog.firstChild)
//         }
//     }
// });


  