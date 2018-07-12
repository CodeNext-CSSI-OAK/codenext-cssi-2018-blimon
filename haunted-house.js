// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
   console.log(" Little girls pops out and asks if I want a cookie");
   let answer = readline.question("Will you have a cookie? (yes or no)");
   if(answer === "y" || answer === "yes"){
     console.log(" Little girl hands you a poisoned cookie");
    }else{
      if(answer !== "y" || answer !== "yes"){
        console.log(" Little girls turns into a ghost and draggs you inside");
let answerTwo = readline.question("Do you know where you are? ()")
     }
   }
 }else {
if(enterHouse !== "y" || enterHouse !== "yes"){
  console.log(" A bunny hops to the yard and asks you if you're hungry");

  }
}
console.log("Thanks for playing!");
