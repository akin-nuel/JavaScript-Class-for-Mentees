let firstNumber; //for Declaration you must have keyword + variableName
firstNumber = 18; //Assignment you must have variableName assignment operator + value
firstNumber = 50; //Declaration and Assignment;
console.log(firstNumber);

//Datatypes;
let secondNumber = "I am the Number"; //String
console.log(secondNumber);

const thirdNumber = true; // Boolean
console.log(thirdNumber);

var number = "25"; //Number
console.log(typeof thirdNumber);

var myArray = ["my car", "my house", "my wife"]; //Arrays
var myArray2 = [2, 5, 10, 15];
console.log(myArray[1]);
console.log(myArray2[3]);

var myObject = {
  firstName: "Emmanuel",
  secondName: "Akinola",
  Age: 24,
  male: true,
}; //Objects
console.log(myObject.firstName);

//BigInt, Symbols, null, undefined,

//Declaration of Function
function myFunction() {
  let myVariableX = 5;
  let myVariableY = 10;
  myVariableX = 200;
  myVariableX = myVariableX * myVariableY;
  console.log(myVariableX);
}

myFunction();

function today() {
  let myWorld = "Hello World!";
  console.log(myWorld);
}

today();

//Write a function to print out I ate to much within a variable five times
function printOut() {
  var myString = "I ate too much";
  console.log(myString);
  console.log(myString);
  console.log(myString);
  console.log(myString);
  console.log(myString);
}

printOut();

//Scope or Scoping

function myNewFunction() {
  let myNewValue = 32;
  console.log(myNewValue);
}

myNewFunction();

//types of Scope
//Global Scope var const let
//Function Scope var const let
//Block Scope const let

Hositing;

console.log(x);
var x = 5;

let myNewValue = "I am okay";
console.log(myNewValue);

//Arithmetic Operators
//String Datatype

let myWord = "Hassan is a";
let herWord = " Good boy";
let result = myWord + herWord; //concatenation
console.log(result);

let myhead = "my nose is" + " bleeding";
console.log(myhead);

let x = "5";
let result1 = x * 3;
console.log(result);

let x = 1;

function increment() {
  x--;
  console.log(x);
}

increment();
increment();
increment();
increment();

let x = 5;
x -= 10;
console.log(x);
