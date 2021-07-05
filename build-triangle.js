function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(x) {
  let triangle = "";
  for (let t = 1; t <= x; t++) {
    triangle += makeLine(t);
  }
  return triangle;
}
console.log(buildTriangle(10))
