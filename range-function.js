function range(start, end, step) {

  let someArray = [];
  if (start && end && step);
  if (start < end)
  if (step > 0)
    for (let x = start; x <= end; x += step) {
      someArray.push(x);
    }
  return someArray; 
}
console.log(range(0, 8, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

//if ((start && end && step) && (start < end) && (step > 0));

/*
function range(start, end, step) {
  let someArray = [];
  if ((start && end && step) && (start < end) && (step > 0));
    for (let x = start; x <= end; x += step) {
      someArray.push(x);
    }
  return someArray; 
}
console.log(range(0, 8, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/

