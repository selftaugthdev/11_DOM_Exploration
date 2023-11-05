const collection = [
    {
        name: "Forza Horizon",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("Playground Games"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Need For Speed",
        releaseYear: 1994,
        genre: ("Racing"),
        studio: ("Electronic Arts"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Assetto Corsa",
        releaseYear: 2014,
        genre: ("Racing"),
        studio: ("Kunos Simulazioni"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "The Crew",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("Ubisoft"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Dirt",
        releaseYear: 2019,
        genre: ("Racing"),
        studio: ("Code Masters"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "WreckFest",
        releaseYear: 2014,
        genre: ("Racing"),
        studio: ("BugBear"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "SnowRunner",
        releaseYear: 2020,
        genre: ("Racing"),
        studio: ("Saber Interactive"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Euro Truck Simulator",
        releaseYear: 2012,
        genre: ("Racing"),
        studio: ("SCS"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Driver",
        releaseYear: 1999,
        genre: ("Racing"),
        studio: ("GT Interactive"),
        platform: ("X-box", "Playstation", "PC")
    },
    {
        name: "Gran Turismo",
        releaseYear: 1997,
        genre: ("Racing"),
        studio: ("PolyPhony"),
        platform: ("Playstation")
    }
]

let cardBody = document.getElementsByClassName("card")
console.log(cardBody)

const fillCard = () => {
    collection.forEach(postData => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <img src="img_avatar.png" alt="Image" style="width:100%">
        <div class="container">
            <h4 class="genre"></h4>
            <h4 class="releaseYear"></h4>
          <h3 class="name"><b></b></h3>
          <h3 class="studio"></h3>
          <h3 class="platform"></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora repudiandae possimus debitis pariatur perspiciatis ipsa sit vitae commodi, hic, nobis natus dolor. Dolorum quam ipsum odit quisquam! Officiis, nesciunt.
          </p>
        </div>
        `
        cardBody[0].appendChild(cardElement)
    });
}

fillCard()


{/* <img src="img_avatar.png" alt="Image" style="width:100%">
        <div class="container">
            <h4 class="genre"></h4>
            <h4 class="year"></h4>
          <h3 class="name"><b></b></h3>
          <h3 class="studio"></h3>
          <h3 class="platform"></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora repudiandae possimus debitis pariatur perspiciatis ipsa sit vitae commodi, hic, nobis natus dolor. Dolorum quam ipsum odit quisquam! Officiis, nesciunt.
          </p>
        </div> */}