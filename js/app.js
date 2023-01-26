'use strict';
let score = 0;

function myName(){
  let myName = prompt('Is my name Thomas? Please type yes or no').toLowerCase();
if (myName === 'yes' || myName === 'y') {
  // console.log("Is my name Thomas? "+ myName);
  alert('Correct!');
  score++;
} else if (myName === 'no' || myName === 'n') {
  // console.log("Is my name Thomas? "+ myName);
  alert('Wrong!');
} else {
  // console.log("Is my name Thomas? "+ myName);
  alert('Why don\'t you type yes or no?');
  }
}
myName();

function likeMovies(){
  let likeMovies = prompt('Do I like movies? Please type y or n').toLowerCase();

if (likeMovies === 'y' || likeMovies === 'yes') {
  // console.log("Do I like movies? " + likeMovies);
  alert('You are right!');
  score++;
} else if (likeMovies === 'n' || likeMovies === 'no') {
  // console.log("Do I like movies? " + likeMovies);
  alert('Sorry, wrong guess');
} else {
  // console.log("Do I like movies? " + likeMovies);
  alert('Is the instruction not clear?');
 }
}
likeMovies();

function Degree(){
  let degree = prompt('Do I have a degree in film? Please answer YES or NO').toUpperCase();

  if (degree === 'YES' || degree === 'Y') {
    // console.log("Do I have a degree in film? " + degree);
    alert('Yes!');
    score++;
  } else if (degree === 'NO' || degree === 'N') {
    // console.log("Do I have a degree in film? " + degree);
    alert('I do have a degree in film.');
  } else {
    // console.log("Do I have a degree in film? " + degree);
    alert('Hi there.');
  }
}
Degree();
 
function math(){
  let math = prompt('Yes or no question: Am I good at math?').toUpperCase();
  
  if (math === 'YES' || math === 'Y') {
    // console.log("Am I good at math? " + math);
    alert('It\'s ok!');
    score++;
  } else if (math === 'NO' || math === 'N') {
    // console.log("Am I good at math? " + math);
    alert('no.');
  } else {
    // console.log("Am I good at math? " + math);
    alert('-_-');
 } 
}
math();
  

function Q4(){
let code = prompt('Do I like to code? Please answer yes or no.').toLowerCase();

if (code === 'yes' || code === 'y') {
  // console.log("Do I like to code? " + code);
  alert('You are 60% right!');
  score++;
} else if (code === 'no' || code === 'n') {
  // console.log("Do I like to code? " + code);
  alert('You are 50% right!');
} else {
  // console.log("Do I like to code? " + code);
  alert(':>');
 }
}
Q4();


function greeting(){
  let greeting = prompt('What is your name?');

  alert('Hi, ' + greeting + ' !');
  
  // Guess number game
  
  let guessNoAttempts = 3;
  let guessNo = prompt('Guess a number between 1 to 10.');
  if (guessNo === 3) {
    score++;
    alert('correct');
  } else {
    while (guessNo !== '3' && guessNoAttempts > 0) {
  
      console.log('not 3');
      if (guessNo < 3 && guessNo > 0) {
        console.log('too low');
        alert('too low');
      } else if (guessNo > 3 && guessNo <= 10) {
        console.log('too high');
        alert('too high');
      } else {
        console.log(guessNo);
        alert('please enter a number between 1 to 10');
      }
      guessNoAttempts--;
      alert(`You have ${guessNoAttempts + 1} attempt left!`);
      guessNo = prompt('Guess a number between 1 to 10.');
    }
    alert('the answer is 3');
  }
}
greeting();


// Question 7 array

let color = ['green', 'orange', 'red', 'blue'];
let guessColor = prompt('What color do I like?');
let guessColorAttempts = 6;
let userCorrect = false;

// need to user input in color array
while (guessColorAttempts) {
  guessColorAttempts--;
  alert(`you have ${guessColorAttempts} attempts left.`);

  for (let i = 0; i < color.length; i++) {
    if (guessColor === color[i]) {
      userCorrect = true;
    }
  }
  if (userCorrect === true) {
    score++;
    userCorrect = false;
    alert("correct");
    break;
  } else if (guessColorAttempts > 0) {
    alert("sorry, guess again");
    guessColor = prompt('What color do I like?');
  }

}
alert(`answers can be ${color} & your final score is ${score} out of 7!`);















// for (let i = 0; i < color.length; i++) {
//   if (color[i] === guessColor) {
//     alert('correct');
//     console.log(color[i]);
//     score++;
//     console.log(`final score: ${score}!`);
//     alert(`final score: ${score}!`);
//   }
//   else {
//     while (guessColorAttempts > 0 && color[i] !== guessColor) {
//       guessColorAttempts--;
//       console.log(guessColorAttempts);

//       alert(`You have ${guessColorAttempts +1} attempt left!`);
//       guessColor = prompt('What color do I like?');


//     }
//     console.log(`final score: ${score}!`);
//     console.log(`the answers are ${color}`);
//     alert(`the answers are ${color}`);
//   }
// }
