
const choices=document.querySelectorAll(".box");

let user_score=document.querySelector(".user-score");
let compscore=document.querySelector(".comp-score")

let play_button=document.querySelector(".play");
 
let score1=document.querySelectorAll(".score");



// to call result value show on screen

let result=document.querySelector("#h");

let result3=document.querySelector("#h3");

// comsole.log(result);



let userscore=1;
let computer_score=1;



const playgame=(userchoice)=>{
    console.log("user choice click",userchoice);

   let computerchoice=generatecomp ();
    console.log("computer choice",computerchoice);


    // to show selected option on screen

    result.innerText=`you🤴${userchoice}`;
    result3.innerText=`comp🧑‍💻${computerchoice}`;


    // compare user choice and computer choice 

    if (userchoice === computerchoice)
    {
        console.log("game is drow");
        play_button.innerText="match is tie";
        play_button.style.color="#333";
        play_button.style.backgroundColor="#DCB30A";
        play_button.classList.add("shaking");
    }
    else {
             let userwin=true;
             
  play_button.classList.remove("shaking");

      if ( userchoice==="rock")
      {
        userwin=computerchoice==="papper"? false :true;
      }
      else if(userchoice==="papper")
      { 
        userwin=computerchoice==="scassor"?false: true;
      }
      else {
        userwin=computerchoice==="rock"?false:true;
      }
      

     

//  fuction

      showwinner(userwin, userchoice,computerchoice);

    }

  
      
}

// showwinner function to track user choice and computer choice to increase score

const showwinner=(userwin,userchoice,computerchoice)=>{
    if (userwin)
    {
        console.log("you win ");
        user_score.innerText=userscore++;
        play_button.innerText=`you win! ${userchoice} beat ${computerchoice}`;
        play_button.style.backgroundColor="green";
        play_button.style.color="white";
        
         }
    else{
        console.log("you lose");
        compscore.innerText=computer_score++;
         play_button.innerText=`computer win! ${computerchoice} beat Your ${userchoice}`;
         play_button.color="white";
         play_button.style.backgroundColor="#C42729";
         play_button.style.color="white";
    }
}

/// generate option for computer  in function or using function

const generatecomp =()=>{
    let option=["rock","papper","scassor"];
    let computer=option[Math.floor(Math.random()*3)];
    // console.log("computer choice",computer);
   return (computer);

}

choices.forEach((box)=>{
    box.addEventListener("click",()=>{
    

    const userchoice=box.getAttribute("id");

    playgame(userchoice);

   
    
       
    });


});



// created reset button to reset game 

let reset=document.querySelector(".reset");

reset.addEventListener("click", () => {
  userscore = 1;
  computer_score = 1;

  user_score.innerText = 0;
  compscore.innerText = 0;

  play_button.innerText = "Game Reset. Play again!";
  play_button.style.backgroundColor = "black";
  play_button.style.color = "white";

  reset.classList.remove("button2");

  console.log("Game has been reset.");



  // to reset result choice 

  result.innerText="your choice !";
  result3.innerText="computer choice!";

  // play_button.classList.remove("shake");
       
});






const gameover=((userwin,userchoice)=>{
  let over=7;
  if(userwin===over)
  {
    alert("game over");
  }
  else if (userchoice===over)
  {
    alert("game over");
  }

})