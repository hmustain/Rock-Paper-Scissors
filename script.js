window.alert("Let's play Rock, Paper, Scissors!");
// alert("Let's play Rock, Paper, Scissors!");

// if (window.confirm("Do you really want to leave?")) {
//     window.open("exit.html", "Thanks for Playing!");
//   }

var confirm = prompt("Do you want to play?", 'yes');
if (confirm.toLowerCase() === "yes") {
    alert("Ok! Let's play!");
  }
  else{ alert("Ok, maybe next time!");
}

window.alert("For this game, Rock = R , Paper = P , & Scissors = S ");


var userChoice = prompt("Do you choose Rock (R), Paper (P), or scissors (S) ?");

var computerChoice = math.random();

if (computerChoice < 0.34) {
    computerChoice = "Rock (R)";
} else if(computerChoice <= 0.67) {
    computerChoice = "Paper (P)";
} else {
    computerChoice = "Scissors (S)";
}

var prompt = function(userChoice,computerChoice){

if (userChoice === computerChoice){
    return ("The result is a tie");
}

else if(userChoice==="R"){
    if(computerChoice==="S"){
        return "Rock wins"
    }
    else if(computerChoice==="P"){
        return "Paper wins";
    }
}
else if(userChoice==="P"){
    if(computerChoice==="S"){
        return "Scissors win"
    }
    else if(userChoice==="R"){
        return "Paper wins";
    }
}
else if(userChoice==="S"){
    if(computerChoice==="P"){
        return "Scissors wins"
    }
    else if(computerChoice==="R"){
        return "Rock wins";
    }
}

}