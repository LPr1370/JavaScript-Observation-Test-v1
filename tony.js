// The grid div
let allButtons = document.getElementById("buttons")

// The amount of grid spots
let gridSpots = 25

// The amount of numbers to find
let amountOfChosenNumbers = 2

// Numbers to find
let chosenNumbers = []

// Generate a random number from 0 to y
let RandomRange = (y) => {
    return Math.floor(Math.random() * y);
}

// Check if value exists in an array
let ValueInArray = (v, arr) => {
    // Set the return value
    let ret = false
    arr.forEach(x => {
        if (x == v) {
            ret = true; // Exit the loop
        }
    });

    return ret;
}

// Generate the random number
let GenerateNumbers = () => {
    chosenNumbers = [] // clear the array

    // Loop through each number slot
    for (let index = 0; index < amountOfChosenNumbers; index++) {
        let done = false

        // Generate a random number
        while (!done) {
            let val = RandomRange(buttonCount)
            // Check if number has already been generated
            if (!ValueInArray(val, chosenNumbers)) {
                // Add number and exit loop
                chosenNumbers.push(val)
                done = true
            }
        }
    }
}

// Generate the button div's
let GenerateButtons = (buttonCount) => {
    // Loop through each button slot
    for (let i = 0; i < buttonCount; i++) {
        // Check if number is a chosen number
        let chosenButton = ValueInArray(i, chosenNumbers)

        // Set the class depending on if the button is chosen
        if (chosenButton) {
            allButtons.innerHTML += "<button class= \"correct-tile\">_</button>"
        } else {
            allButtons.innerHTML += "<button class= \"tile\">_</button>"
        }
    }
}

// Start the game
GenerateNumbers()
GenerateButtons(gridSpots)