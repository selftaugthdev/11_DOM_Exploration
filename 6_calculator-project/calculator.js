/* let digits = [
   {
      digit: "1",
   },
   {
      digit: "2",
   },
   {
      digit: "3",
   },
   {
      digit: "4",
   },
   {
      digit: "5",
   },
   {
      digit: "6",
   },
   {
      digit: "7",
   },
   {
      digit: "8",
   },
   {
      digit: "9",
   },
   {
      digit: "0",
   },
];

let operations = [
   {
      label: "+",
   },
   {
      label: "-",
   },
   {
      label: "*",
   },
   {
      label: "/",
   },
   {
      label: "=",
   },
   {
      label: "C",
   },
];


// const resultBtn = 

let main = document.querySelector("main")

function appendElements() {
   main.classList.add = ("calculatorBody")

   digits.forEach((data) => {
      const digitsButtons = document.createElement("div");
      digitsButtons.classList.add("digits");
      digitsButtons.innerHTML = `
         <button class="button">${data.digit}</button>
      `;
      main.appendChild(digitsButtons);
   })

   operations.forEach((data) => {
      const operationsButtons = document.createElement("div");
      operationsButtons.classList.add("operations");
      operationsButtons.innerHTML = `
         <button class="button">${data.label}</button>
      `;
      main.appendChild(operationsButtons);
   })
}

appendElements() */

let main = document.querySelector("main");
main.classList.add("calculator");

// Create the screen
let screen = document.createElement("div");
screen.classList.add("screen");
screen.textContent = "0";
main.appendChild(screen);

// Create rows of buttons
const buttonLabels = ["7", "8", "9", "C", "4", "5", "6", "*", "1", "2", "3", "/", "0", "+", "-", "="];

for (let i = 0; i < 4; i++) {
    let buttonRow = document.createElement("div");
    buttonRow.classList.add("button-row");
    main.appendChild(buttonRow);

    for (let j = 0; j < 4; j++) {
        let button = document.createElement("button");
        button.textContent = buttonLabels[i * 4 + j];
        buttonRow.appendChild(button);
    }
}

// Select all buttons in the calculator
const buttons = document.querySelectorAll("button");

// Create a variable to store the current input
let currentInput = "";

// Add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText >= "0" && buttonText <= "9") {
            // If the button is a digit, add it to the current input
            currentInput += buttonText;
            screen.textContent = currentInput;
        } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
            // If the button is an operator, perform the operation
            currentInput += buttonText;
            screen.textContent = currentInput;
        } else if (buttonText === "=") {
            // If the button is "=", evaluate the expression and display the result
            try {
                currentInput = eval(currentInput);
                screen.textContent = currentInput;
            } catch (error) {
                // Handle any potential errors
                screen.textContent = "Error";
            }
        } else if (buttonText === "C") {
            // If the button is "C", clear the input
            currentInput = "";
            screen.textContent = "0";
        }
    });
});

