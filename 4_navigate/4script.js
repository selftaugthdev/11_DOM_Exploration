let list = document.querySelector("ol")

// console.log(list)

// Get the last child of the <ol>
const lastChild = list.lastElementChild;

// Move the last child to the beginning of the list
list.insertBefore(lastChild, list.firstElementChild);
// console.log(lastChild)

//get Main element
let main = document.querySelector("main")
console.log(main)

//get the third H2
// let thirdHeading = main.children[1].children[0]
let thirdHeading = main.querySelector('section:nth-child(2) h2')
console.log(thirdHeading)

//get the second H2
let secondHeading = main.querySelector('section:nth-child(3) h2')
console.log(secondHeading)

// Move the H2 of the 2nd and 3rd to swap places
main.insertBefore(thirdHeading, main.secondHeading)

//TODO: remove the footer
// get the footer
let footer = document.querySelector("footer")
footer.remove()