let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const drawGame = ()=>{
    msg.innerHTML="Draw!!";
}


const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer's choice
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);

    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            //computer choice is either scissor or paper
            userWin = compChoice === "paper" ? false : true;
            //if computer choice is paper, then computer wins
            //if computer choice is scissor, then user wins
        }
        else if(userChoice==="paper"){
            //computer choice is either rock or scissor
            userWin = compChoice === "rock" ? true : false;
            //if computer choice is rock, then user wins
            //if computer choice is scissor, then user lose
        }
        else {
            //computer choice is either rock or paper
            userWin = compChoice === "rock" ? false : true;
            //if computer choice is rock, then computer wins
            //if computer choice is paper, then user wins
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice); 
    })
})