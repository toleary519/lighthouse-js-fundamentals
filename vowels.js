function numberOfVowels(string) {

  let totalVow = 0;
  let vowels = "aeiou"
  for (i = 0; i < string.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
      totalVow = totalVow + 1;
      }
    }
  }
  return totalVow;
  };
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));
