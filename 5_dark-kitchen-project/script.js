let menuItems = [
    {
        image: "./images/bolognese.jpeg",
        name: "Pizza Bolognese",
        category: "Comfort Food",
        description: "A delicious pizza covered in bolognese sauce."
    },
    {
        image: "./images/hamburger.jpeg",
        name: "Home-made Hamburger & Fries",
        category: "Comfort Food",
        description: "Our glorious home-made hamburger made from grass-fed ground beef."
    },
    {
        image: "./images/vegan pizza.jpeg",
        name: "Vegan Pizza",
        category: "Vegan",
        description: "Want a vegan alternative of our best-seller? Here is our vegan pizza."
    },
    {
        image: "./images/steak.jpeg",
        name: "Steak & Fries",
        category: "Home Made",
        description: "Our juicy steak with freshly cut fries."
    },
    {
        image: "./images/cesar.jpeg",
        name: "Cesar Salade",
        category: "Vegan",
        description: "A delicious vegan version of a classic cesar salade."
    },
    {
        image: "./images/chicken nugget.jpeg",
        name: "Home-made Chicken Nuggets & Fries",
        category: "Home Made",
        description: "Who doesn't love chicken nuggets, every childs favorite."
    },
    {
        image: "./images/fish.jpeg",
        name: "Fish & Chips",
        category: "Comfort Food",
        description: "A British Classic, enough said."
    },
    {
        image: "./images/kebab.jpeg",
        name: "Turkish Kebab",
        category: "Comfort Food",
        description: "You will think you are in Turkey when you smell and taste our delicious Kebab."
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
        <p class="description">${data.description}</h4><br>
        <button class="orderButton">ORDER</button>
        </div>
        `
        cardItem.appendChild(cardElement)
    })
}

cardItems()