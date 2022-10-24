window.alert("Let's play Rock, Paper, Scissors!");
// alert("Let's play Rock, Paper, Scissors!");

// if (window.confirm("Do you really want to leave?")) {
//     window.open("exit.html", "Thanks for Playing!");
//   }
var score=0
function initialGame() {

    var confirm = prompt("Do you want to play?", 'yes');
    if (confirm.toLowerCase() === "yes") {
        alert("Ok! Let's play!");
        startGame();
    }
    else {
        alert("Ok, maybe next time!");
    }

    window.alert("For this game, Rock = R , Paper = P , & Scissors = S ");
}
function startGame() {



    var userChoice = prompt("Do you choose Rock (R), Paper (P), or scissors (S) ?");

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "R";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }

    compare(userChoice, computerChoice);
}

function compare(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        alert("The result is a tie your choice : " + userChoice + " computer choice : " + computerChoice);
    }

    else if (userChoice === "R") {
        if (computerChoice === "S") {
            alert("Rock wins your choice : " + userChoice + " computer choice : " + computerChoice)
            score++
        }
        else if (computerChoice === "P") {
            alert("Paper wins your choice : " + userChoice + " computer choice : " + computerChoice);
        }
    }
    else if (userChoice === "P") {
        if (computerChoice === "S") {
            alert("Scissors win your choice : " + userChoice + " computer choice : " + computerChoice)
            score++
        }
        else if (userChoice === "R") {
            alert("Paper wins your choice : " + userChoice + " computer choice : " + computerChoice);
        }
    }
    else if (userChoice === "S") {
        if (computerChoice === "P") {
            alert("Scissors wins your choice : " + userChoice + " computer choice : " + computerChoice)
            score++
        }
        else if (computerChoice === "R") {
            alert("Rock wins your choice : " + userChoice + " computer choice : " + computerChoice);
        }
    }
    alert("Your Score : " + score)
initialGame();
}
initialGame();