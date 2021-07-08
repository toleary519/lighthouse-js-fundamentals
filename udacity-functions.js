function laugh() {
  let message = "hahahahahahahahahaha!"
  return message;
}
console.log(laugh())

let sound = ""
function laugh(num) {
  for (let x = 0; x < num; x++ ) {
  sound = sound + "ha"
  }
sound = sound + "!"
  return sound; 
}

console.log(laugh(3))

// build a triangle 

function buildATriangle(num) {
  for (let x = 1; x <= num; x++)
  console.log("*")
}
console.log(buildATriangle(10))

let row = ""
function buildATriangle(num) {
  for (let x = 1; x <= num; x++) {
  row = row + "*";
  }
return row;
}
console.log(buildATriangle(10))

// cry function 

let cry = function cry(x) {
  let cry = "";
  for (c = 1; c <= x; c++) {
    cry = cry += "boo"
  }
  return cry;  
}
console.log(cry(3))
// your code goes here

let cry = function cry(x) {
  let cry = "boohoo"
  return cry;  
}
console.log(cry)

// arrays

// splice
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green")
rainbow.push("Purple")

console.log(rainbow)

// objects

// open umbrella 

var umbrella = {
   color: "pink",
   isOpen: true,
   open: function() {
       if (umbrella.isOpen === true) {
           return "The umbrella is already opened!";
       } else {
           umbrella.isOpen = true;
           return "Julia opens the umbrella!";
       }
   },
   close: function() {
      if (umbrella.isOpen === false) {
      return "The umbrella is already closed!"
      } else { 
      umbrella.isOpen = false;
      return "Julia closes the umbrella!"
      } 
   }
};

// menu items 

let breakfast = {
  name : "The Lumberjack",
  cost : "$9.95", 
  ingredients : ["eggs","sausage","toast","hashbrowns","pancakes"]
}

// bank accounts 

const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function displayBalance() {
    return `Welcome! Your balance is currently $1000 and your interest rate is 1%.`
  }
};

console.log(savingsAccount.printAccountSummary());

// facebook profile 
let facebookProfile = {
  name : "Thomas", 
  friends : 10,
  messages : ["Hello","Oh Hi","No way",],
  postMessage: function message(text) {
    messages.push(text);
  },
  deleteMessage: function index(i) {
    messages.splice(this.messages[i]);
  },
  addFriend : function friendCount() {
    friends = friends += 1;
  },
  removeFriend: function friendGone() {
    friends = friends -= 1;
  }
}
facebookProfile.addFriend(1);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);








