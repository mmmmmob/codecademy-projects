// declare my age as variable
let myAge = 31;
// declare an early years
let earlyYears = 2;
earlyYears *= 10.5;
// subtract early years from my age
let laterYears = myAge - 2;
// calculate the number of dog years accounted for by my later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// combine two variables to be a dog year
let myAgeInDogYears = earlyYears + laterYears;
// change my name to lowercase
let myName = "Mob".toLowerCase();
// console.log a sentence
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
