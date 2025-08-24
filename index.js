const minNum = 0;
const maxNum = 100;
let guess ;
let random = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;
let play = true ;
Attempts = 0;


while(play){


        guess = window.prompt(`Guess a Number Between ${minNum} And ${maxNum}`); 
        if(guess === null){
                window.alert("Game Canceled");
                break;
        }
        if(guess.trim() === ""){
                window.alert("You must enter a number");
                continue;
        
        }

        guess = Number(guess);
        Attempts ++ ; 
        
        if(Attempts === 10){
                window.alert("Opps You have lost,try Again");
                break;
        }
        if(isNaN(guess) || guess > maxNum || guess < minNum){
                window.alert("invaild Number,please try again");

        }
        else if(random < guess){
                window.alert("too high");
               
        }
        else if(random > guess){
                window.alert("too low");  
               
        }    
        else{
                 window.alert(`correct, You guessed it in ${Attempts} `);
                 play = false ;
        }
                
} 
  
       


        
