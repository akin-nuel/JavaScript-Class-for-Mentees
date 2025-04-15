// let firstNumber; //for Declaration you must have keyword + variableName
// firstNumber = 18; //Assignment you must have variableName assignment operator + value
// firstNumber = 50; //Declaration and Assignment;
// console.log(firstNumber);

// //Datatypes;
// let secondNumber = "I am the Number"; //String
// console.log(secondNumber);

// const thirdNumber = true; // Boolean
// console.log(thirdNumber);

// var number = "25"; //Number
// console.log(typeof thirdNumber);

// var myArray = ["my car", "my house", "my wife"]; //Arrays
// var myArray2 = [2, 5, 10, 15];
// console.log(myArray[1]);
// console.log(myArray2[3]);

// var myObject = {
//   firstName: "Emmanuel",
//   secondName: "Akinola",
//   Age: 24,
//   male: true,
// }; //Objects
// console.log(myObject.firstName);

// //BigInt, Symbols, null, undefined,

// //Declaration of Function
// function myFunction() {
//   let myVariableX = 5;
//   let myVariableY = 10;
//   myVariableX = 200;
//   myVariableX = myVariableX * myVariableY;
//   console.log(myVariableX);
// }

// myFunction();

// function today() {
//   let myWorld = "Hello World!";
//   console.log(myWorld);
// }

// today();

// //Write a function to print out I ate to much within a variable five times
// function printOut() {
//   var myString = "I ate too much";
//   console.log(myString);
//   console.log(myString);
//   console.log(myString);
//   console.log(myString);
//   console.log(myString);
// }

// printOut();

// //Scope or Scoping

// function myNewFunction() {
//   let myNewValue = 32;
//   console.log(myNewValue);
// }

// myNewFunction();

// //types of Scope
// //Global Scope var const let
// //Function Scope var const let
// //Block Scope const let

// Hositing;

// console.log(x);
// var x = 5;

// let myNewValue = "I am okay";
// console.log(myNewValue);

// //Arithmetic Operators
// //String Datatype

// let myWord = "Hassan is a";
// let herWord = " Good boy";
// let result = myWord + herWord; //concatenation
// console.log(result);

// let myhead = "my nose is" + " bleeding";
// console.log(myhead);

// let x = "5";
// let result1 = x * 3;
// console.log(result);

// let x = 1;

// function increment() {
//   x--;
//   console.log(x);
// }

// increment();
// increment();
// increment();
// increment();

// let x = 5;
// x -= 10;
// console.log(x);

// const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

// const car = {
//   myCar: "Saturn",
//   getCar: carTypes("Honda"),
//   special: sales,
// };

// console.log(car.getCar);

// const myCar = {
//   manyCars: {
//     a: "Saab",
//     b: "Jeep",
//   },
//   7: "Mazda",
// };

// console.log(myCar.manyCars.b);
// console.log(myCar[7]);

// let egg;
// egg = true;

// let bread = false;

// function myEgg() {
//   let peace = "I understand";
//   peace
// }

// myEgg();

// console.log(egg);

//Write a function that adds the value of three numbers assigned to x, y, z;
// function addThreeNumbers() {
//   let x = 5;
//   let y = 10;
//   let z = 15;
//   let result = x + y + z;
//   console.log(result);
// }

// addThreeNumbers();

// function threeNumbers(x, y, z) {
//   let result = x + y + z;
//   console.log(result);
// }

// threeNumbers(100, 200, 800);
// threeNumbers(50, 20, 8);
// threeNumbers(200, 1000, 200);

// function addNumbers(p1, p2) {
//   console.log(p1 + p2);
// }

// function multipyNumbers(p1, p2) {
//   console.log(p1 * p2);
// }

// function divisionNumber(p1, p2) {
//   console.log(p1 / p2);
// }

// addNumbers(100, 50);
// multipyNumbers(100, 50);
// divisionNumber(100, 50);
// addNumbers(500, 300);
// addNumbers(1000000, 5000000);

// function userCalculate() {
//   let firstNumber = prompt("Give me your first Number");
//   let secondNumber = prompt("Give me your second Number");
//   let result = firstNumber * secondNumber;
//   document.write(`Your Answer is ${result}`);
// }

// userCalculate();

// let string1 = "My name is";
// let string2 = " Emmanuel";
// let string3 = " Akinola";
// let output = string1 + string2 + string3;
// console.log(output);

//template literals ``
// let name = prompt("What is your name?");
// let age = prompt("Give me your age?");
// let sex = prompt("What gender are you?");
// document.write(
//   `My name is ${name}, I am ${age} years old. I am a ${sex}. I like to eat and play.`
// );

// let string = "Emmanuel is a good boy";
// console.log(string.length);

// let age = prompt("what is your age");

// if (age < 22) {
//   document.write("You are still a child");
// } else {
//   document.write("You are ripe for Marriage");
// }

// let weather = prompt("What is the weather today?");
// if (weather === "Rainy") {
//   document.write("Don't go to the market");
// } else if (weather === "Sunny") {
//   document.write("Go to the market");
// } else if (weather == "Cloudy") {
//   document.write("Go and play");
// } else {
//   document.write("Go and eat");
// }

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

const name = "John";
const age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years Old`);

// let x = 5;
// if(x > 10){

// } else {

// }

// const mySchedule = prompt("What day is it?");

// switch (mySchedule) {
//   case "Sunday":
//     console.log("I am going to Church");
//     break;

//   case "Monday":
//     console.log("I am going to Work");
//     break;

//   case "Tuesday":
//     console.log("I am going to party");
//     break;

//   case "Wednesday":
//     console.log("I am going to sleep");
//     break;

//   default:
//     console.log("I am home");
//     break;
// }

// let count = 0;
// while (count < 10) {
//   console.log("Emmanuel is the most Handsome man in the world");
//   count++;
// }

let count1 = 0; //Declare count1
while (count1 <= 5) {
  //Conditional
  console.log("I ate too much");
  count1++; //Increment
}

let x = 10; //Declare
do {
  document.write(x);
  x++; //increment
} while (x < 7); // Codition

// while (x < 7) {
//   document.write(x);
//   x++;
// }

for (let count3 = 0; count3 < 3; count3++) {
  document.write("I am tired ");
}
