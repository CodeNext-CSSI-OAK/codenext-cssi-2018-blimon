function makeAbba(a,b){

  return a + b + b + a;

}
function comboString(a,b){
  if(a.length > b.length){
    return b + a + b;

  }
  return a + b + a;
}

function lastTwo(str) {
  if(str.length >= 2){

  }
  let lastChar = str.charAt(str.length - 1);
  let secondLastChar = str.charAt(str.length - 2);
  let firstPart = str.substring(0, str.length - 2);

}
console.log(makeAbba("heyy","heyy"));
console.log(comboString("sad", "happy"));
