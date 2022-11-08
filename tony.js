let allButtons = document.getElementById("buttons")
let amountOfChosenNumbers = 10
let chosenNumbers = []

let RandomRange = (y) => {
    return Math.floor(Math.random() * y);
}

let ValueInArray = (v, arr) => {
    let ret = false
    arr.forEach(x => {
        if (x == v) {
            console.log(v, arr)
            ret = true;
        }
    });

    return ret;
}

let GenerateButtons = (buttonCount) => {
    chosenNumbers = []
    for (let index = 0; index < amountOfChosenNumbers; index++) {
        let done = false
        while (!done) {
            let val = RandomRange(buttonCount)
            if (!ValueInArray(val, chosenNumbers)) {
                chosenNumbers.push(val)
                done = true
            }
        }
    }

    for (let i = 0; i < buttonCount; i++) {
        let chosenButton = ValueInArray(i, chosenNumbers)
        if (chosenButton) {
            allButtons.innerHTML += "<button class= \"correct-tile\">_</button>"
        } else {
            allButtons.innerHTML += "<button class= \"tile\">_</button>"
        }
    }
}

GenerateButtons(60)