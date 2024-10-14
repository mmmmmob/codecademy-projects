let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
// reference length
console.log(secretMessage.length);

// task 1 => Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();

// task 3 => Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to", "Program");

// task 4 => Change the word easily to the word right by accessing the index and replacing it.
secretMessage.splice(7, 1, "right");

// task 5 => Use an array method to remove the first string of the array.
secretMessage.shift();

// task 6 => Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know,");
// task 7 => Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.

// task 8 => On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));

// task log
console.log(secretMessage.length);
console.log(secretMessage);
