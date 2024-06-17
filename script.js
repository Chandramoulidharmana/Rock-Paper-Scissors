let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const drawGame=()=>{
   // console.log("Game was Draw");
    msg.innerText = "Game was Draw Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       // console.log("you Win!");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
       // console.log("you lose");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`you lose ${compChoice} beat s${userChoice}`;
        msg.style.backgroundColor="red";

    }
};
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);  // Generates the random values between 0 to 2
    return options[randIdx];
};
const playGame=(userChoice)=>{
    //console.log("userChoice=",userChoice);
    // Generate computer choice
    const compChoice=genCompChoice();
    //console.log("computer choice=",compChoice);

    if(userChoice == compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            // scissors,papper
           userWin= compChoice == "paper" ? false : true;
        }
        else if(userChoice=="paper"){
            // rock,scissors
            userWin=compChoice == "scissors" ? false :true;
        }
        else{
            userWin=compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}
choices.forEach((choice) =>{
  //  console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
       playGame(userChoice);
    });
});