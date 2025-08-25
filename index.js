const minNum = 0;
const maxNum = 400;
let guess ;
let random = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;
let play = true ;
let Attempts = 0;


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
        
        
        
        if(isNaN(guess) || guess > maxNum || guess < minNum){
                window.alert("invaild Number,please try again");

        }
        else{
        
                 window.alert(`${random} is Correct!,${Attempts} Attempts🥳`);
                 play = false ;
                
                
        }
        
        if(Attempts === 10){
                window.alert(`Stupied!,The Correct Answer was ${random}🤪`);
                break; }
                
        else if(random < guess){
                window.alert("too high,Try Again");
               
        }
        else if(random > guess){
                window.alert("too low,Try Again");  
               
        }    
        
                
} 
  
       


        











