function conditionalSum(values, condition) {

  let sum = 0; 

  for (let v = 0; v < values.length; v++) {
    if (condition === "odd" && values[v]% 2 !== 0) {
      sum += values[v]
    } 
    else if (condition === "even" && values[v] % 2 === 0) {
      sum += values[v]
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));