let body = document.querySelector("body");
let ul = body.querySelector("ul");
let listItems = ul.getElementsByTagName("li");
let fastAndFurious = null;
let children = ul.childNodes
console.log(children)


for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent.includes("Fast and Furious")) {
      fastAndFurious = listItems[i];
      fastAndFurious.classList.add("important");
      //break; // Stop searching once found
    if (fastAndFurious !== ul.firstElementChild) {
        ul.insertBefore(fastAndFurious, ul.firstElementChild);
      }
    
    }
  }

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', () => {
        alert(listItems[i].innerText);
        if (listItems[i].textContent.includes("Fast and Furious")) {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        }
    })
  }

