const learners = [
"Lucas",
"Kilian",
"Alec",
"Mohamed",
"Pieter",
"Rebecca",
"Alessandro",
"Josué",
"Thibault",
"Eduarda",
"Mohammed",
"Funda",
"Luis",
"Alexandru",
"Andrej",
"Danté",
"Jonasi",
"Kelsey",
"Rana",
"Jana",
"Sieglinde",
"Gustave",
"Sezin",
"Sylvie",
"Anaïs"]

// Get the <article> element
const article = document.querySelector('article');

// Shuffle the list
const shuffledLearners = learners.sort(() => Math.random() - 0.5)

// Loop through the learners array
learners.forEach(student => {
    // Create a new <section> element
    const section = document.createElement('section');

    // Set a random background color
    section.style.backgroundColor = getRandomColor();

    // Create a <p> element with the learner's name
    const paragraph = document.createElement('p');
    paragraph.textContent = student;

    //TODO: If the background is DARK the text should be WHITE and Vice Versa
    
    if(getRandomColor.colorData >= 0.5) {
        paragraph.style.color = "black"
    } else {
        paragraph.style.color = "white"
    }
    // Append the paragraph to the <section> and the <section> to the <article>
    section.appendChild(paragraph);
    article.appendChild(section);
});

function getRandomColor() {
    // Generate a random color using RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const colorData = luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255)

    // Return the CSS color string
    return `rgb(${r},${g},${b})`;
}

 

