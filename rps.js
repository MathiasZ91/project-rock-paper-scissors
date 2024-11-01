var input = require('readline-sync');
var rpsInput = input.question('welcome to rock paper scissors. Please enter rock, paper, scissors or 0 to quit\no>> ');
let rps = ['rock', 'paper', 'scissors'];

// generates random number below 0 and 1 x when you multiply by 3  you get 0, 1, 2, 3
//floor rounds it down to the nearest whole number

while(userChoice!=0){
    let computerChoice = rps[Math.floor((Math.random() *3))];
    userChoice = userChoice.toLowerCase();
// checks if the Computer wins 
    if((userChoicec =='rock'&&computerChoice =='paper') ||(userChoice =='paper'&&computerChoice =='scissors')||userChoice =='scissors'&&computerChoice =='rock'){
        console.log(`computer won. Computer choice: ${computerChoice}\n`);
        userChoice = input.question(`welcome to rock paper scissors. Please enter rock, paper, scissors or 0 to quit\no>> `)
// checks if the user wins 
    }else if((userChoice =='paper'&&computerChoice =='rock')||(userChoice =='rock'&&computerChoice =='scissors')||(userChoice =='scissors'&&computerChoice == 'paper')){
        console.log(`You won. Computer choice: ${computerChoice}`);
        userChoice = input.question(`welcome to rock paper scissors. Please enter rock, paper, scissors or 0 to quit\n>> `);
// checks if the its a tie 
    }else if(userChoice == computerChoice){
            console.log(`Its a tie. Computer Choice: ${computerChoice}`)
            userChoice = input.question(`welcome to rock paper scissors. Please enter rock, paper, scissors or 0 to quit\n>> `);

    }else if(userChoice !='rock'userChoice!='paper'||userChoice!='scissors' ||isNan(userChoice) == false){
        console.log('Please try again with a valid input')
        userChoice = input.question(`welcome to rock paper scissors. Please enter rock, paper, scissors or 0 to quit\n>> `);
    }

   }
   console.log(`Thank You for playing`);