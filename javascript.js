const container = document.querySelector(".button-container");
const roundStatus = document.querySelector(".round-status");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".victory-message");
let computerScore = 0;
let humanScore = 0;


container.addEventListener('click', (e) =>{
    let target = e.target;

    switch(target.id){
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});

function getComputerChoice(){
    let choiceInNumber = Math.floor(Math.random() * 3);
    let choice;
    choice = (choiceInNumber===0) ? "rock" : (choiceInNumber===1) ? "paper" : "scissors";
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock"){
        switch (computerChoice){
            case "rock": 
                roundStatus.textContent = "draw";
                break;
            case "paper":
                roundStatus.textContent = "you lose, paper beats rock.";
                computerScore++;
                break;
            case "scissors":
                roundStatus.textContent = "you win, rock beats scissors.";
                humanScore++;
                break;
        }   
    }else if(humanChoice=="paper"){
        switch (computerChoice){
            case "rock": 
                roundStatus.textContent = "you win, paper beats rock.";
                humanScore++;
                break;
            case "paper":
                roundStatus.textContent = "draw";
                break;
            case "scissors":
                roundStatus.textContent = "you lose, scissors beats paper.";
                computerScore++;
                break;
        }   
    }else if(humanChoice=="scissors"){
        switch (computerChoice){
            case "rock": 
                roundStatus.textContent = "you lose, rock beats scissors.";
                computerScore++;
                break;
            case "paper":
                roundStatus.textContent = "you win, scissors beats paper.";
                humanScore++;
                break;
            case "scissors":
               roundStatus.textContent = "draw";
                break;
        }   
    }
    scoreBoard.textContent = `Your score: ${humanScore} \n
    Computer score: ${computerScore}`;

    if(humanScore===5){
        removeScore();
        result.textContent= "Congratulations, you've won the match.";
        humanScore = 0;
        computerScore = 0;
    }else if(computerScore===5){
        removeScore();
        result.textContent= "You've lost. Better luck next time.";
        humanScore = 0;
        computerScore = 0;
    }else{
        result.textContent= "";
    }
}

function removeScore(){
    roundStatus.textContent="";
}
