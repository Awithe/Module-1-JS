// circle_area_calculator.js

// Prompt the user for their first name
const Fname = prompt("Please enter your first name:");

// Display a welcome message with the user's name
const welcomeMessage = `Welcome, ${Fname}!`;
console.log(welcomeMessage);
document.write(`<p>${welcomeMessage}</p>`);

// Define a constant for Pi to 7 significant digits
const piValue = 3.1415926;

// Prompt the user to input their favorite number
const myFavNum = parseFloat(prompt("What is your favorite number?"));

// Ensure the input is valid
if (isNaN(myFavNum) || myFavNum <= 0) {
    const errorMessage = "Invalid input. Please enter a positive number.";
    console.log(errorMessage);
    document.write(`<p>${errorMessage}</p>`);
} else {
    // Calculate the area of a circle using the favorite number as the radius
    const myArea = piValue * Math.pow(myFavNum, 2);

    // Create a message displaying the results
    const resultMessage = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle’s area would be approximately ${myArea.toFixed(2)}.`;

    // Display the calculated area and all variables to the webpage
    console.log(resultMessage);
    document.write(`<p>${resultMessage}</p>`);
}
