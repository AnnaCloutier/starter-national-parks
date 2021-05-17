/*
console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const headingTwo = document.querySelector(".value");
console.log(headingTwo);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area);

const descendant = document.querySelector(".stat div");
console.log(descendant);

const greeting = document.querySelector(".hello");
console.log(greeting);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");

for (let element of heading3List.values()) {
    console.log(element);
};

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
};



const allRatings = document.querySelectorAll(".rating-display .value");

for (let rating of allRatings.values()) {
    console.log(rating);
};


const allAreas = document.querySelectorAll(".area-display .value")

for (let i = 0; i < allAreas.length; i++) {
    let result = allAreas[i];
    console.log(result);
};
*/

/*
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
        }
    
        desc.innerHTML = content;
    }

const ratings = document.querySelectorAll(".rating-display .value")
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
        }
    }

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);
const main = document.querySelector("main");
const park = main.querySelector(".park-display");
main.removeChild(park);
console.log(document)
*/

/*
const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
});
*/


const allBtns = document.querySelectorAll(".rate-button");
/*
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target.parentNode)
    });
});
*/
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
});

//const nameSorter = document.querySelector("#name-sorter");

//Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
};

//Function for handling the 'namesorter' click
const nameSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByName);
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};







//Add rating sorter

//function to sort by ratings
const sortByRating = (rateA, rateB) => {
    const parkARating = parseFloat(rateA.querySelector(".rating-display > .value").innerText);
    const parkBRating = parseFloat(rateB.querySelector(".rating-display > .value").innerText);
    return parkBRating - parkARating;
};
//function to handle ratingSorter click
const ratingSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByRating);
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};

const domEventHandlerFunction = () => {
    //Select the 'nameSorter' link
    const nameSorter = document.querySelector("#name-sorter");
    //Add event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
    //Select ratingSorter link
    const ratingSorter = document.querySelector("#rating-sorter");
    //add event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
}
window.addEventListener("DOMContentLoaded", domEventHandlerFunction);



/*
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    });
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});
*/




