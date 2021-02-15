const kelvin = 293; //forecast for today's temperature
let celsius = (kelvin - 273); //converting temp into celsius
let fahrenheit = celsius * (9/5) + 32; // converting temp to f.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);