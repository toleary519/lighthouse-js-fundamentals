function sumLargestNumbers(data) {
  let array = data.sort(compare);
  function compare(a, b) {
    return a - b;
  }
  let x = array[array.length - 1];
  let y = array[array.length - 2];
  return x + y; 
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


/*  
function sumLargestNumbers(data) {
let dataOrganized = data.sort(data);
let x = dataOrganized[dataOrganized.length - 2];
let y = dataOrganized[dataOrganized.length - 1];
return x + y; 
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/*
let test = [10, 4, 34, 6, 92, 2];
let x = test[test.length - 2];
console.log(x)
}
/*
function sumLargestNumbers(data) {
  let dataOrganized = data.sort();
  let x = dataOrganized[-1];
  let y = dataOrganized[-2];
  return x + y;
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//sort the data, 
//get the two highest i's and 
//sum them
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
/*
11
5
126
*/
