let main = document.querySelector("main")
console.log(main)

main.classList.add = ("calculatorBody")
function appendElements () {
   const digitsButtons = document.createElement("div");
   digitsButtons.classList.add("digits");
   digitsButtons.innerHTML = `
   <div id="1">1</div>
   <div id="2">2</div>
   <div id="3">3</div>
   <div id="4">4</div>
   <div id="5">5</div>
   <div id="6">6</div>
   <div id="7">7</div>
   <div id="8">8</div>
   <div id="9">9</div>
   <div id="0">0</div>
   `
}

appendElements()