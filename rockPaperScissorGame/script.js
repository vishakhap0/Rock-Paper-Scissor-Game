let button=document.querySelectorAll("button");
let compChoice="";
let msg=document.querySelector("#msg");
let userScore=0;
let computerScore=0;
let score=document.querySelector("#user-score");
let comScore=document.querySelector("#com-score");   
let userChoice;

const comChoice = ()=>
{ let option =["rock","paper","scissor"];
 let randomIdx=Math.floor(Math.random()*3);
 return option[randomIdx];
}


const showWinner=(userWin)=>
{
    if(userWin)
    {
        console.log(`you win`);
        msg.innerText=`YOU WIN ! `;
        msg.style.backgroundColor="green";
        score.innerText= userScore++;
       

    }
    else {
        console.log("you lose");
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
        comScore.innerText=computerScore++;
    }
}


const playGame=(userChoice)=>
{   console.log(`user choice = ${userChoice}`);
let compGen=comChoice();
    console.log(`computer choice = ${compGen}`);
    
   
    if(userChoice === compGen)
    {
       console.log("game is tie");
       msg.innerText="Game Is Tie. Play Again";
       msg.style.backgroundColor="purple";
    }
    else{
        let userWin = true;
        if (userChoice==="rock")
        {
            //scissor,paper
           userWin=  compGen ==="paper"?false:true; 
        }
        else if (userChoice==="paper")
        {
            //rock,scissor
            userWin = compGen ==="scissor"?false:true;
            
        }
        else if (userChoice==="scissor")
        {
            //rock,paper
            userWin=  compGen ==="rock"?false:true;
        }
        showWinner(userWin);

    }
}

button.forEach((button)=>
{
    button.addEventListener("click",()=>
    {
       const userChoice = button.getAttribute("id");
    playGame(userChoice);
    })
})