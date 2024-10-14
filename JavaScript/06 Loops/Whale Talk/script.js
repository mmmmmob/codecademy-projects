const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // double 'e' and 'u' if the inner loop is true
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // check to push only vowels from input into resultArray
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// console.log(resultArray);

// convert array into string and uppercased it
let resultString = resultArray.join("").toUpperCase();

console.log(resultString);
