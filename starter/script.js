 'use strict';

// // const { Console } = require('console');
// // const fs = require('fs');

// // console.log(document.querySelector('.message').textContent);


// // document.querySelector('.message').textContent = 'Correct Number!';

// // document.querySelector('number').textContent = 13;
// // document.querySelector('.score').textContent = 10;


// // document.querySelector

// // console.log(document.querySelector('.guess').value);


// //random number generation 
 let numbers = Math.trunc(Math.random() *20) + 1;
//  let score = 20;


 
document.querySelector('.check').addEventListener('click', function(){
    
const guess = Number (document.querySelector('.guess').value);

let newScore = Number (document.querySelector('.score').textContent);

let newhighScore = Number(document.querySelector('.highscore').textContent);


    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '😢No number';
newScore--;
          //console.log('Please Enter a Number');
        
          // when player wins 
    }else if(guess === numbers){


        document.querySelector('.message').textContent = '👌Correct Number!';
        document.querySelector('body').style.backgroundColor = '#617A55';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = guess;
    
    

        if (newScore > newhighScore) {
            newhighScore = newScore;
            document.querySelector('.highscore').textContent = newhighScore;
       }        
            
    }      else if(guess !== numbers){
            if (newScore > 1) {
                document.querySelector('.message').textContent = guess > numbers ? 'too high' : 'too low';
                newScore--;
                document.querySelector(".score").textContent = newScore;

                
            }else{
                document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
            }
        }
});
      
        //when guess is too high
//     }else if(guess > numbers){
       

//         if(newScore > 1 ){
//             //calculating number of chances/ 
//         // document.querySelector('.score').textContent = newScore;

//         document.querySelector('.message').textContent = '📈Too High';

//         newScore--;

//         document.querySelector(".score").textContent = newScore;

//         }else{
//             document.querySelector('.message').textContent = '😭You lost the game!!';

//             document.querySelector('.score').textContent = 0;
//         }
//     } 
//     else if(guess < numbers){
       

//         if(newScore > 1 ){    
//             //  document.querySelector('.score').textContent = newScore;

//         document.querySelector('.message').textContent = '📉Too Low';

//         newScore--;

//       //  decrementing values
//         document.querySelector(".score").textContent = newScore;

//         }else{
//             document.querySelector('.message').textContent = '😭You lost the game';

//             document.querySelector('.score').textContent = 0;
//         }     
        
//     }

 


document.querySelector('.again').addEventListener('click',function(){

    numbers = Math.trunc(Math.random() *20) + 1;

//  css class manipulation for body. which is not class!!

    document.querySelector('body').style.backgroundColor = '#0C134F';

    document.querySelector('.score').textContent = '20';
    
    document.querySelector('.number').textcontent = '?';

    document.querySelector('.message').textContent = 'start guessing';
    
    document.querySelector('.guess').value = ' ';
});
