const urlEncode = function(string) {
  //loop through string, if blank replace with %20
  //trim
let urlString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      urlString += "%20";
    } else {
    urlString += string[i];
    } 
  }
  let finalString = urlString.trim()
return finalString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


