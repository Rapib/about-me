'use strict';

let myName = prompt('Is my name Thomas? Please type yes or no').toLowerCase();

if (myName === "yes" || myName === "y"){
  // console.log("Is my name Thomas? "+ myName);
  alert('Correct!');
} else if (myName === "no" || myName === "n"){
  // console.log("Is my name Thomas? "+ myName);
  alert('Wrong!');
} else {
  // console.log("Is my name Thomas? "+ myName);
  alert("Why don't you type yes or no?");
}

let likeMovies = prompt("Do I like movies? Please type y or n").toLowerCase();

if (likeMovies === "y" || likeMovies === "yes"){
  // console.log("Do I like movies? " + likeMovies);
  alert("You are right!");
} else if (likeMovies === "n" || likeMovies === "no"){
  // console.log("Do I like movies? " + likeMovies);
  alert("Sorry, wrong guess");
} else {
  // console.log("Do I like movies? " + likeMovies);
  alert("Is the instruction not clear?");
}

let degree = prompt("Do I have a degree in film? Please answer YES or NO").toUpperCase();

if (degree === "YES" || degree === "Y"){
  // console.log("Do I have a degree in film? " + degree);
  alert("Yes!");
} else if (degree === "NO" || degree === "N"){
  // console.log("Do I have a degree in film? " + degree);
  alert("I do have a degree in film.");
} else {
  // console.log("Do I have a degree in film? " + degree);
  alert("Hi there.");
}

let math = prompt("Yes or no question: Am I good at math?").toUpperCase();

if (math === "YES" || math === "Y"){
  // console.log("Am I good at math? " + math);
  alert("It's ok!");
} else if (math === "NO" || math === "N"){
  // console.log("Am I good at math? " + math);
  alert("About average.");
} else {
  // console.log("Am I good at math? " + math);
  alert("-_-");
}

let code = prompt("Do I like to code? Please answer yes or no.").toLowerCase();

if (code === "yes" || code === "y"){
  // console.log("Do I like to code? " + code);
  alert("You are 50% right!");
} else if (code === "no"|| code === "n"){
  // console.log("Do I like to code? " + code);
  alert("You are 50% right!");
} else {
  // console.log("Do I like to code? " + code);
  alert(":>");
}

let greeting = prompt("What is your name?");

alert("Hi, " + greeting + " !");