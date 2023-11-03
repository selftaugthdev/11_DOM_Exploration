let main = document.querySelector("main");
let formOne = main.querySelector('section:nth-child(1) input');
let formTwo = main.querySelector('section:nth-child(2) input');
let displayFirstname = document.getElementById('display-firstname');
let truth = document.getElementById("a-hard-truth")
let password = document.getElementById("pwd")
let passwordConfirm = document.getElementById("pwd-confirm")
let toggle = document.getElementById("toggle-darkmode")
let body = document.querySelector("body")

//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">
formOne.addEventListener('keyup', () => {
  // Get the value of the input field
  const firstnameValue = formOne.value;

  // Update the content of the span with the input value
  displayFirstname.textContent = firstnameValue;
})

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
formTwo.addEventListener('keyup', () => {
    // Convert the value of the input field to a number
  const age = parseInt(formTwo.value);

  if (age < 18) {
    truth.style.visibility = 'hidden';
  } else {
    truth.style.visibility = 'visible';
  }
  if (age < 18) {
    displayFirstname.style.background = "green"
  } else {
    displayFirstname.style.background = "red"
  }
})

password.addEventListener('keyup', () => {
    const passwordValue = password.value;

    if (passwordValue.length < 6) {
        password.style.background = "red";
    } else {
        password.style.background = "white";
    }
})

passwordConfirm.addEventListener('keyup', () => {
    const passwordConfirmValue = passwordConfirm.value;

    if (passwordConfirmValue.length < 6) {
        passwordConfirm.style.background = "red";
    } else {
        passwordConfirm.style.background = "white";
    }
})

toggle.addEventListener("change", () => {
    if (toggle.value === "dark") {
        body.style.background = "black";
        body.style.color = "white";
    } else {
        body.style.background = "white";
        body.style.color = "black";
    }

})