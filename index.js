let humanScore = 0;
let computerScore = 0;

let rounds = 1;

while(rounds <= 5)
{

    playGame();  
    rounds++;
}

if(humanScore > computerScore)
{
    console.log("You won score:" + humanScore);
}
else
{
    console.log("Computer won score:" + computerScore);
}

function getComputerChoice()
{
    //create a random number 0-2
     let number = Math.floor(Math.random() * 3);
    //IF number == 1 print rock...
    let comChoice;
    if(number === 0)
    {
        comChoice = "Rock";
    }
    else if(number === 1)
    {
        comChoice = "Paper"
    }
    else
    {
        comChoice = "Scissors"
    }
    //return comChoice 
    return comChoice
}

//function that INPUT the user move

function getHumanChoice()
{
    let getChoice = prompt("Enter your move Rock-Paper-Scissors? :");

    return getChoice;
}


function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    //If human === rock and computer === paper com wins
    if(humanChoice === "ROCK" && computerChoice === "PAPER" )
    {
        console.log("Computer wins")
        return computerScore++;
    }
    //If human === paper and computer === scissors com wins
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS" )
    {
        console.log("Computer wins")
        return computerScore++;
    }
    //If human === scissors and computer === rock com wins
    else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK" )
    {
        console.log("Computer wins")
        return computerScore++;
    }
    //If human === paper and computer === rock human wins
    //If human === scissors and computer === paper human wins
    //If human === rock and computer === scissors human wins
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK" )
        {
            console.log("Human Wins")
            return humanScore++;
        }
        else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER" )
        {
            console.log("Human Wins")
            return humanScore++;
        }
        else if(humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS" )
        {
            console.log("Human Wins")
            return humanScore++;
        }
        else
        {
            console.log("It's a tie");
        }
        
  }
  

function playGame()
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    let game = playRound(humanSelection, computerSelection);
}

  