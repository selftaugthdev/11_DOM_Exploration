const LEVEL_1 = [
  ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
  ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
  ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
  ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_2 = [
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_3 = [
  ["*","*","*","*","*","*","*","*"],
  ["*","*","*","*","S","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*","*",".","*","*","*","*","*"],
  ["*","T",".","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*"]
]

const main = document.querySelector("main")
main.classList.add("maze")

for (let i = 0; i < LEVEL_1.length; i++) {
    const row = LEVEL_1[i];

    for (let j = 0; j < row.length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("element");

        if (row[j] === "*") {
            // This is a WALL
            cell.classList.add("wall");
        } else if (row[j] === "S") {
            // This is the START 
            cell.classList.add("start")
        } else if (row[j] === "T") {
            // This is the TARGET
            cell.classList.add("target")
        } else {
            // This is the PATH
            cell.classList.add("path")
        }
        main.appendChild(cell);
    }
}

const mazeContainer = document.querySelector("main.maze");
const mazeRows = LEVEL_1.length;
const mazeCols = LEVEL_1[0].length;

let playerRow, playerCol; // Initialize player's position

// Find the initial position of the player
for (let i = 0; i < mazeRows; i++) {
  for (let j = 0; j < mazeCols; j++) {
    if (LEVEL_1[i][j] === "S") {
      playerRow = i;
      playerCol = j;
      break;
    }
  }
}

// Function to update player's position and redraw the maze
function movePlayer(direction) {
  let newRow = playerRow;
  let newCol = playerCol;

  if (direction === "ArrowUp" && playerRow > 0) {
    newRow -= 1;
  } else if (direction === "ArrowDown" && playerRow < mazeRows - 1) {
    newRow += 1;
  } else if (direction === "ArrowLeft" && playerCol > 0) {
    newCol -= 1;
  } else if (direction === "ArrowRight" && playerCol < mazeCols - 1) {
    newCol += 1;
  }

  // Check if the new position is a valid path (not a wall)
  if (LEVEL_1[newRow][newCol] !== "*") {
    // Clear the current position
    mazeContainer.children[playerRow * mazeCols + playerCol].classList.remove("player");
    // Update the player's position
    playerRow = newRow;
    playerCol = newCol;
    // Add player class to the new position
    mazeContainer.children[playerRow * mazeCols + playerCol].classList.add("player");
  }
}

// Add event listener to handle keyboard input
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    movePlayer(event.key);
  }
});

// Initialize the player's position
mazeContainer.children[playerRow * mazeCols + playerCol].classList.add("player");
