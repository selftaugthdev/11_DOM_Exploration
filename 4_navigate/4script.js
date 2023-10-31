let list = document.querySelector("ol")

// console.log(list)

// Get the last child of the <ol>
const lastChild = list.lastElementChild;

// Move the last child to the beginning of the list
list.insertBefore(lastChild, list.firstElementChild);
// console.log(lastChild)

