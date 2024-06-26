let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("p");
const rock_div = document.getElementById("rock"); 
const paper_div = document.getElementById("paper"); 
const scissors_div = document.getElementById("scissors");
const reset_button = document.getElementById("restart")


function getComputerChoice(){
	const choices = ["rock", "paper", "scissors"]
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice){
	userScore++
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice.toUpperCase() + " beats " +  computerChoice.toUpperCase() + " .You win!"
	document.getElementById(userChoice).classList.add("green-glow")  
}

function lose(userChoice, computerChoice){
	computerScore++
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice.toUpperCase() + " loses to " +  computerChoice.toUpperCase() + " .You lost..."
}

function draw(userChoice, computerChoice){
	result_p.innerHTML = "It's a draw"
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
	case "rockscissors":
	case "paperrock":
	case "scissorspaper":
		win(userChoice, computerChoice)
		break;
	case"rockpaper":
	case"paperscissors":
	case"scissorsrock":
		lose(userChoice, computerChoice)
		break;
	case"rockrock":
	case"paperpaper":
	case"scissorsscissors":
		draw(userChoice, computerChoice)
		break;
	}

}

function main(){
rock_div.addEventListener('click', function(){
	game("rock")
})

paper_div.addEventListener('click', function(){
	game("paper")
})

scissors_div.addEventListener('click', function(){
	game("scissors")
})}






	




























main();
game();