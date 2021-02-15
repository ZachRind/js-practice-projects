/*Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/

const myAge = 28; //my age

let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2; //have to account for years beyond first two
laterYears *= 4; //each year after 2 is like 4 years

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Zachary Rind'.toLowerCase();

console.log(`My name is ${myName}, I am ${myAge} years old, which would be ${myAgeInDogYears} years old in dog years!`);