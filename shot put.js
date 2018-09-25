let newThrow = 1;
let allThrows = [];
let best = 0;

while(newThrow > 0){
  newThrow = prompt("How far did you throw the discus?");
  allThrows.push(newThrow);
  best = Math.max(...allThrows);
}
alert(best);