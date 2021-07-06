function howManyHundreds(bottles) {
let remainder = bottles % 100;
let hundreds = ((bottles - remainder) / 100); 
return hundreds;
}
