// Author: Belen Limon-Herrera

let readline = require('readline-sync');
let centsAsNumber =  Number(readline.question(' How many cents do you have? '));

let quarters = Math.floor(centsAsNumber/25);
console.log("quarters ="+quarters);
centsAsNumber = centsAsNumber - quarters * 25;


let dime = Math.floor(centsAsNumber/10);
console.log("dime ="+dime);
centsAsNumber = centsAsNumber - dime * 10;


let nickel = Math.floor(centsAsNumber/5);
console.log("nickel ="+nickel);
centsAsNumber = centsAsNumber - nickel * 5;


let penny =Math.floor(centsAsNumber/1);
console.log("penny ="+penny);
centsAsNumber = centsAsNumber - penny * 1;
