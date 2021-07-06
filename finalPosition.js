let moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


let finalPosition = function (moves) {
  let finalPosition = [0,0];
  for (let move of moves) {
    if (move === 'north') {
      finalPosition[1] += 1;
    }
    if (move === 'south') {
      finalPosition[1] -= 1;
    }
    if (move === 'east') {
      finalPosition[0] += 1;
    }
    if (move === 'west') {
      finalPosition[0] -= 1;
    }
  }  
  return finalPosition;
}
console.log(finalPosition(moves));
