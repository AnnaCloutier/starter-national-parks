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