let title = document.querySelector("#title")
let newTitle = "Modifying the DOM"

document.querySelector('title').textContent = newTitle

document.body.style.backgroundColor = "rgb(57 255 20)"

const childElements = document.body

for (const child of childElements.children) {
    console.log(child.tagName)
}