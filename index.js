let humanScore = 0;
let computerScore = 0;
const moveImo = ["🪨", "🧻","✂️"]

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnPlayAgain = document.querySelector(".btn-playAgain");
const displayHuman = document.querySelector(".display-human");
const displayComputer = document.querySelector(".display-computer");
const displayWinner = document.querySelector(".display-winner")
const scores = document.querySelector(".scores")

//display scores

scores.textContent= "Human score: " + humanScore + " | " + "Computer score: " + computerScore;


btnRock.addEventListener("click", () => {
    displayMove(0);
  })
btnPaper.addEventListener("click", () => {
    displayMove(1); 
  })
btnScissors.addEventListener("click", () => {
    displayMove(2);
  })
//function that INPUT the user move

btnRock.onclick = () => {
    playRound("Rock",getComputerChoice());
};
btnPaper.onclick = () => {
    playRound("Paper",getComputerChoice());
};
btnScissors.onclick = () => {
    playRound("Scissors",getComputerChoice());
};



function chickenDinner()
{
    if(computerScore === 5 || humanScore === 5)
    {
    if(computerScore === 5)
    {
       alert("Computer Wins");
       humanScore = 0;
       computerScore = 0;
    }
    else
    {
        alert("Humans Wins");
        humanScore = 0;
        computerScore = 0;
    }
    
    }

}



function getComputerChoice()
{
    //create a random number 0-2
     let number = Math.floor(Math.random() * 3);
    //IF number == 1 print rock...
    let comChoice;
    if(number === 0)
    {
        comMove(0)
        comChoice = "Rock";

    }
    else if(number === 1)
    {
        comMove(1)
        comChoice = "Paper"
    }
    else
    {
        comMove(2)
        comChoice = "Scissors"
    }
    //return comChoice 
    return comChoice
}
function displayScores()
{
    scores.textContent= "Human score: " + humanScore + " | " + "Computer score: " + computerScore;
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    displayScores();
    chickenDinner();
    //If human === rock and computer === paper com wins
    if(humanChoice === "ROCK" && computerChoice === "PAPER" )
    {
        winnerDisplay("Computer");
        return computerScore++;

    }
    //If human === paper and computer === scissors com wins
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS" )
    {        const content = document.createElement("div");
        winnerDisplay("Computer");
        return computerScore++;
    }
    //If human === scissors and computer === rock com wins
    else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK" )
    {
        winnerDisplay("Computer");
        return computerScore++;
    }
    //If human === paper and computer === rock human wins
    //If human === scissors and computer === paper human wins
    //If human === rock and computer === scissors human wins
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK" )
        {
            winnerDisplay("Humans");
            return humanScore++;
        }
        else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER" )
        {
            winnerDisplay("Humans");
            return humanScore++;
        }
        else if(humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS" )
        {
            winnerDisplay("Humans");
            return humanScore++;
        }
        else
        {
            
            displayWinner.textContent = "It's a tie";
            
        }
        
  };
  
//display winner
function winnerDisplay(win)
{
        displayWinner.textContent = win + " Wins!";
}
//display choice

function displayMove(number)
{
    displayHuman.textContent = moveImo[number];
};

function comMove(number)
{  
    displayComputer.textContent = moveImo[number];
}