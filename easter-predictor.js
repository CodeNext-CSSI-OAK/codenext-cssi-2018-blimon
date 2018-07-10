// Author: Belen Limon-Herrera

//  Let y be the year (such as 1583 or 2003).
let y = 2003;
console.log('y ='+ y);
//Divide y by 19 and call the remainder a. Ignore the quotient.
let a =(y % 19);
console.log('a ='+ a);
//Divide y by 100 and get a quotient b and remainder c.
let b = Math.floor(y / 100);
console.log('b ='+ b);
let c = y % 100;
console.log('c ='+ c);
//Divide b by 4 and get quotient d and remainder e.
let d = Math.floor(b/4);
console.log('d ='+ d);
let e = b % 4;
console.log('e ='+ e);
//Divide b + 8 by 25 and get quotient f. Ignore the remainder.
let f = Math.floor((b+8)/25);
console.log('f ='+f);
//Divide b - f + 1 by 3 and get quotient g. Ignore the remainder.
let g = Math.floor((b-f+1)/3);
console.log('g ='+g);
//Divide 19 * a + b - d - g + 15 by 30 and get remainder h. Ignore the quotient.
let h = Math.floor((19 * a + b - d - g +15) % 30);
console.log('h ='+h);
//Divide c by 4 and get quotient i and remainder k.
let i = Math.floor(c/4) 
//Divide 32 + 2 * e + 2 * i - h - k by 7 and get remainder r. Ignore the quotient.
//Divide a + 11 * h + 22 * r by 451 and get quotient m. Ignore the remainder.
//Divide h + r - 7 * m + 114 by 31 and get quotient n and remainder p.
