let menuItems = [
    {
        image: "./images/bolognese.jpeg",
        name: "Pizza Bolognese",
        category: "Comfort Food",
        description: "A delicious pizza covered in bolognese sauce.",
        price: "14$"
    },
    {
        image: "./images/hamburger.jpeg",
        name: "Home-made Hamburger & Fries",
        category: "Comfort Food",
        description: "Our glorious home-made hamburger made from grass-fed ground beef.",
        price: "22$"
    },
    {
        image: "./images/vegan pizza.jpeg",
        name: "Vegan Pizza",
        category: "Vegan",
        description: "Want a vegan alternative of our best-seller? Here is our vegan pizza.",
        price: "19$"
    },
    {
        image: "./images/steak.jpeg",
        name: "Steak & Fries",
        category: "Home Made",
        description: "Our juicy steak with freshly cut fries.",
        price: "28$"
    },
    {
        image: "./images/cesar.jpeg",
        name: "Cesar Salade",
        category: "Vegan",
        description: "A delicious vegan version of a classic cesar salade.",
        price: "15$"
    },
    {
        image: "./images/chicken nugget.jpeg",
        name: "Home-made Chicken Nuggets & Fries",
        category: "Home Made",
        description: "Who doesn't love chicken nuggets, every childs favorite.",
        price: "10$"
    },
    {
        image: "./images/fish.jpeg",
        name: "Fish & Chips",
        category: "Comfort Food",
        description: "A British Classic, enough said.",
        price: "24$"
    },
    {
        image: "./images/kebab.jpeg",
        name: "Turkish Kebab",
        category: "Comfort Food",
        description: "You will think you are in Turkey when you smell and taste our delicious Kebab.",
        price: "18$"
    },
]

const cardItems = () => {
    let cardItem = document.querySelector(".cardContainer")
    console.log(cardItem)

    menuItems.forEach((data) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
        <div class="cardContainer">
        <img src="${data.image}" alt="Image">
        <h4 class="name">${data.name}</h4>
        <p class="category">Category: ${data.category}</p>
        <p class="description">${data.description}</p>
        <p class="price">${data.price}</p>
        <button class="orderButton">ORDER</button>
        </div>
        `
        cardItem.appendChild(cardElement)
    })
}

cardItems()

let toggleBtn = document.getElementById("toggle-btn")
let body = document.body
let darkMode = localStorage.getItem('dark-mode')

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode')
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}