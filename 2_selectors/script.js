const titleTag = document.querySelectorAll(".important")

 titleTag.forEach(important => {
     important.setAttribute('title',"This is an important item")
});
//----------------------------------------------------
let images = document.querySelectorAll("img")
console.log(images)

images.forEach(i => {
if (!i.classList.contains('important')); {
    i.style.display = "none"
 }
})
//----------------------------------------------------
let paragraphs = document.querySelectorAll("p")
// console.log(paragraphs)

paragraphs.forEach(p => {
    console.log('Content', p.textContent)
    if (p.classList.length > 0) {
        console.log('Class:', p.classList);
    }
})
//----------------------------------------------------
paragraphs.forEach(p => {
    if (!p.classList.length) {
    let randomColor = getRandomColor();
    p.style.color = randomColor;
    }
})

function getRandomColor() {
    // Generate a random color using RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Construct the CSS color string
    return `rgb(${r},${g},${b})`;
}