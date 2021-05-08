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