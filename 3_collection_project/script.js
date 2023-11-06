const collection = [
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1698342317",
        name: "Forza Horizon",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("Playground Games"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1262540/capsule_616x353.jpg?t=1614949605",
        name: "Need For Speed",
        releaseYear: 1994,
        genre: ("Racing"),
        studio: ("Electronic Arts"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.akamai.steamstatic.com/steam/apps/244210/header.jpg?t=1686917372",
        name: "Assetto Corsa",
        releaseYear: 2014,
        genre: ("Racing"),
        studio: ("Kunos Simulazioni"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/241560/capsule_616x353.jpg?t=1680006031",
        name: "The Crew",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("Ubisoft"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.akamai.steamstatic.com/steam/apps/321040/capsule_467x181.jpg",
        name: "Dirt",
        releaseYear: 2019,
        genre: ("Racing"),
        studio: ("Code Masters"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/228380/header.jpg?t=1696917323",
        name: "WreckFest",
        releaseYear: 2014,
        genre: ("Racing"),
        studio: ("BugBear"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/capsule_616x353.jpg?t=1697715028",
        name: "SnowRunner",
        releaseYear: 2020,
        genre: ("Racing"),
        studio: ("Saber Interactive"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_616x353.jpg?t=1691582130",
        name: "Euro Truck Simulator",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("SCS"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://storefront.steampowered.com/v/gfx/apps/33440/capsule_467x181.jpg",
        name: "Driver",
        releaseYear: 1999,
        genre: ("Racing"),
        studio: ("GT Interactive"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        image: "https://pcgamingit.b-cdn.net/wp-content/uploads/2022/11/gran-turismo-7-pc-1024x576.webp",
        name: "Gran Turismo",
        releaseYear: 1997,
        genre: ("Racing"),
        studio: ("PolyPhony"),
        platform: ("Playstation")
    }
]

let cardBody = document.getElementsByClassName("card")

const fillCard = () => {
    const container = document.querySelector('.container');

    collection.forEach((postData) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
        <div class="container">
        <img src="${postData.image}" alt="Image">
        <h4 class="genre">${postData.genre}</h4>
        <h4 class="releaseYear">${postData.releaseYear}</h4>
        <h3 class="name"><b>${postData.name}</b></h3>
        <h3 class="studio">${postData.studio}</h3>
        <h3 class="platform">${postData.platform}</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora repudiandae possimus debitis pariatur perspiciatis ipsa sit vitae commodi, hic, nobis natus dolor. Dolorum quam ipsum odit quisquam! Officiis, nesciunt.
        </p>
        </div>
        `;
        container.appendChild(cardElement)
    });
}

fillCard()