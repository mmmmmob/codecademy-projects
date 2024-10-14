// declare a constant kelvin variable
const kelvin = 265;
// declare a celsius variable
let celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// round fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert celsius to newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
