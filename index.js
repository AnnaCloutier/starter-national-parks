/*//function for handling form submission
const submitHandler = (event) => {
    event.preventDefault();
    console.log("The form was submitted");
    //get name input
    const parkName = document.querySelector("#name-input").value;
    console.log(parkName);
    //get location
    const parkLoc = document.querySelector("#location-input").value;
    console.log(parkLoc);
    //get description
    const parkDesc = document.querySelector("#description-input").value;
    console.log(parkDesc);
    //get est
    const parkEst = document.querySelector("#established-input").value;
    console.log(parkEst);
    //get area
    const parkArea = document.querySelector("#area-input").value;
    console.log(parkArea);
    //get rating
    const parkRate = document.querySelector("#rating-input").value;
    console.log(parkRate);
}; */

//function to validate any value was entered
function validateExists(value) {
    return value && value.trim();
};

//functions to validate value is a number and within specific range
function validateNumber(value) {
    return !isNaN(value);
};

function validateRange(value, min, max) {
    return value >= min && value <= max;
};

//function to validate date
function validateDate(value) {
    const date = moment(value);
    return date.isValid();
};

//validate data/values entered in form
function validateForm(formData) {
    const errors ={};
    //check if name was entered
    if (!validateExists(formData.get("name"))) {
        errors.name = "Please enter a name";
    }
    //check if rating was entered
    if (!validateExists(formData.get("rating"))) {
        errors.rating = "Please enter a rating";
    } else {
        //check if the rating is a number
        if (!validateNumber(formData.get("rating"))) {
            errors.rating = "Rating must be a number";
        } else {
            //since it is a number, convert it
            const rating = Number.parseFloat(formData.get("rating"));
            //check that the rating is between 1 and 5
            if (!validateRange(rating, 1, 5)) {
                errors.rating = "Rating must be between 1 and 5 inclusive";
            }
        }
    }
    //check if desc. was entered
    if (!validateExists(formData.get("description"))) {
        errors.description = "Please enter a short description";
    }
    //check if est. date was entered
    if (!validateExists(formData.get("established"))) {
        errors.established = "Please enter a date";
    }
    //check is area was entered
    if (!validateExists(formData.get("area"))) {
        errors.area = "Please enter the area of the park";
    }
    //check if location was entered
    if (!validateExists(formData.get("location"))) {
        errors.location = "Please enter the location of the park";
    };
    return errors;
};

//function for handling form submission
const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const errors = validateForm(formData);
    
    //clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
        element.style.display = "none";
    };

    //display any new errors
    Object.keys(errors).forEach((key) => {
        //find the specific error element
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = "block";
    });
    //if there are no errors
    if (!Object.keys(errors).length) {
        //create new element
        const parkSection = document.createElement("section");
        //add the park class
        parkSection.classList.add("park-display");
        //construct the HTML for this element
        const content = `
        <h2>${formData.get("name")}</h2>
        <div class="location-display">${formData.get("location")}</div>
        <div class="description-display">${formData.get("description")}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
            <div class="established-display stat">
                <h3>Established</h3>
                <div class="value">${moment(formData.get("established")).format(
                    "MMMM D, YYYY"
                    )}</div>
            </div>
            <div class="area-display stat">
                <h3>Area</h3>
                <div class="value">${formData.get("area")}</div>
            </div>
            <div class="rating-display stat">
                <h3>Rating</h3>
                <div class="value">${formData.get("rating")}</div>
            </div>
        </div>
        `;
        //set the innerHTML
        parkSection.innerHTML = content;
        //append to the main element
        document.querySelector("main").appendChild(parkSection);
    }
    //get name input
//    const name = formData.get("name");
//    console.log(name);
};

//function that creates event listener for submission
const main = () => {
    //get form element
    const form = document.querySelector("#park-form");
    //attach the submit handler
    form.addEventListener("submit", submitHandler);
};

//add event listener for DOMContentLoaded that invokes main()
window.addEventListener("DOMContentLoaded", main);





