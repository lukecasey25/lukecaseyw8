

let userChoice = text.toLowerCase(); //the text case kept messing with my if statement and was getting false errors, this stopped them


function RockPaperScissorsGame() {
    var userChoice;
    userChoice = prompt("Please Choose: Rock, Paper or Scissors");
    var rPs = ["rock", "paper", "scissors"];
    var computer = rPs[Math.floor(Math.random() * 3)];
    var result;




    //Print the choices 

    document.getElementById("computerChoice").innerHTML += computer.toLowerCase();
    document.getElementById("userChoice").innerHTML += userChoice.toLowerCase();



    // Determine the winner

    if (userChoice.toLowerCase() === "rock" && computer.toLowerCase() === "scissors" || userChoice.toLowerCase() === "paper" && computer.toLowerCase() === "rock" || userChoice.toLowerCase() === "scissors" && computer.toLowerCase() === "paper" || userChoice.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        result = document.getElementById("whowon").innerHTML = "You have Won";
    }

    else if (computer.toLowerCase() === "rock" && userChoice.toLowerCase() === "scissors" || computer.toLowerCase() === "scissors" && userChoice.toLowerCase() === "paper" || computer.toLowerCase() === "paper" && userChoice.toLowerCase() === "rock") {
        result = document.getElementById("whowon").innerHTML = " computer Wins";
    }

    else if (userChoice.toLowerCase() === computer.toLowerCase()) {

        result = document.getElementById("whowon").innerHTML = " It's a Draw";
    }

    else {
        result = document.getElementById("whowon").innerHTML = "Please type in rock paper or scissors, Please check for typos";
    }

    //hide the button to stop error
    hide();

}


//Would probably add a refresh page button and call it play again 





function hide() {
    document.getElementById("rpsButton").style.display = "none";
    myFunction();

}
