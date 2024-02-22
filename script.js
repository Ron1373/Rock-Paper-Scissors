function getComputerChoice(){
    let num=Math.floor(Math.random()*3)
    switch (num){
        case 1:
        return 'Rock';
        
        case 2:
        return 'Paper';
        
        default:
        return 'Scissors';
    }
}

  
function playGame(){
    let winCount = 0;
    function playRound(playerSelection, computerSelection) {
        switch (playerSelection){
            case "rock":
                switch (computerSelection){
                    case 'Rock':
                        return 'The computer also played Rock. It is a tie';
                    case 'Paper':
                            return 'The computer played Paper. You lose.';
                    case 'Scissors':
                        winCount+=1;    
                        return 'The computer played Scissors. You win!'
                }
                case "paper":
                    switch (computerSelection){
                        case 'Paper':
                            return 'The computer also played Paper. It is a tie';
                        case 'Scissors':
                                return 'The computer played Scissors. You lose.';
                        case 'Rock':
                            winCount+=1;  
                            return 'The computer played Rock. You win!'
                            
                    }
                    case "scissors":
                        switch (computerSelection){
                            case 'Scissors':
                                return 'The computer also played Scissors. It is a tie';
                            case 'Rock':
                                    return 'The computer played Rock. You lose.';
                            case 'Paper':
                                winCount+=1;  
                                return 'The computer played Paper. You win!'
                        }  
            }
        }
      
    for (let i=1; i<=5; i++) {
    let playerSelection = prompt("Pick Rock, paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));}
    console.log("You won " + winCount + " rounds.");}
  
  
  