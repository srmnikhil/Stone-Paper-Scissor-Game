let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");
let userNewScore = document.querySelector("#user-score");
let compNewScore = document.querySelector("#comp-score");

const genComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors
}

choice.forEach((image) =>{
    image.addEventListener("click", () => { 
        // Getting ID of userChoice, specified with name.
        const userChoice = image.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice){
        drawGame();     
    } else {
        let userWin = true;
        if (userChoice === "Rock"){
            //scissor, paper
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            //rock, scissor
            userWin = compChoice === "Scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () =>{
    msg.style.backgroundColor = "blue";
    msg.innerText = "The Game was drawn! Start Again.";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userNewScore.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compNewScore.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
    }
}
