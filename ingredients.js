let ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0; 
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (ing of ingredients) {
console.log(ing);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (ing of ingredients.reverse()) {
console.log(ing);
}

