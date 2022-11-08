let allButtons = document.getElementById("buttons")

let RandomRange = (y) => {
    return Math.floor(Math.random() * y);
}

let GenerateButtons = (buttonCount) => {
    let chosenButton = RandomRange(buttonCount)
    for (let index = 0; index < buttonCount; index++) {
        if (chosenButton == index) {
            allButtons.innerHTML += "<button class= \"correct-tile\">_</button>"
        } else {
            allButtons.innerHTML += "<button class= \"tile\">_</button>"
        }
    }
}

GenerateButtons(25)