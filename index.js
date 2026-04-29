let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
    //rock,paper scissors

};
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText="Game was draw..!🤝 Play again.";
            msg.style.backgroundColor="black";

};


const showWinner=(userWin,choiceId,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win !");
        msg.innerText=`You Win...! Your  ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
          comScore++;
          comScorePara.innerText=comScore;
           msg.innerText=`You lost...!  Computer ${compChoice} beats ${choiceId}`;
                msg.style.backgroundColor="red";

    }
}
const playGame = (choiceId) => {
    console.log("user choice = ", choiceId);
    //computer choice
    const compChoice = genCompChoice();
    console.log("com choice = ", compChoice);
    if (choiceId === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (choiceId === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;

        }
        else if (choiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,choiceId,compChoice);
    }
}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked !", choiceId);
        playGame(choiceId);
    });
});
