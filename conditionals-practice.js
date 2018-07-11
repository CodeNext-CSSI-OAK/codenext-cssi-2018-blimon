//Author: Belen Limon-Herrera
  let readline = require("readline-sync");
  let ourNum = 5;
  let userNum = Number(readline.question("Please guess a number from 1 to 10: "));

if (userNum === ourNum) {
  console.log("You guessed it! Lucky!");
} else if (userNum > ourNum) {
  console.log(" You guessed to high :()");
} else {
  console.log("You guessed to low");
