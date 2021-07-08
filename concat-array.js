function concat(array1, array2) {
  let concatArray = [];
  for (let x = 0; x < array1.length; x++) {
    concatArray.push(array1[x]);
  }
  for (let y = 0; y < array2.length; y++) {
    concatArray.push(array2[y]);
  }
  return concatArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);