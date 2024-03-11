// TASK NO 01:_

var number = +prompt("enter the number that you want to check wheather even/odd: ");
if(number % 2 === 0){
    console.log("the number is even");
}else{
    console.log("the number is odd");
}

// TASK NO 02:-

var number1 = +prompt("enter the number that you want to check positive/negative : ");
if(number1 > 0){
    console.log("the number is positive");
}else if(number1 < 0){
    console.log("the number is negative");
}else{
    console.log("the number is zero");
}

// TASK NO 03:-

var number2 = +prompt("enter the first number that you want to check: ");
var number3 = +prompt("enter the second number that you want to check: ");
if(number2 > number3){
    console.log("the maximum number is : " + number2 );
}else if(number2 < number3){
    console.log("the maximum number is : " + number3);
}else{
    console.log("the numbers are equal");
}

// TASK NO 04:-

var number4 = +prompt("enter the first number that you want to check: ");
var number5 = +prompt("enter the second number that you want to check: ");
var number6 = +prompt("enter the third number that you want to check: ");
if(number4 < number5 && number4 < number6){
    console.log("the smallest number is : " + number4);
}
else if(number5 < number4 && number5 < number6){
    console.log("the smallest number is : " + number5);
}
else if(number6 < number4 && number6 < number5){
    console.log("the smallest number is : " + number6);
}
else{
    console.log("All number are equal");
}

// TASK NO 05:-

var number7 = +prompt("enter the marks in MATH number : ");
var number8 = +prompt("enter the marks in CHEMISTRY number : ");
var number9 = +prompt("enter the marks in BIOLOGY number : ");
var number10 = (number7 + number8 + number9)/3;
if(number10 > 85){
    console.log("you get: A+" );
}
else if(number10 < 85 && number10 > 70){
    console.log("you get: A" );
}
else if(number10 < 70 && number10 > 55 ){
    console.log("you get: B" );
}
else{
    console.log("sorry , please try again ");
}

// TASK NO 06:-

var number11 = +prompt("enter the temperature in celsius : ");
var number12 = ((9/5) * number11)+32;
console.log("the temperature in fahrenheit is: " + number12);

// TASK NO 07:-

var number13 = +prompt("Enter the first value of the triangle side: ");
var number14 = +prompt("Enter the second value of the triangle side: ");
var number15 = +prompt("Enter the third value of the triangle side: ");

if (number13 === number14 && number14 === number15) {
    console.log("The triangle is equilateral");
} else if (number13 !== number14 && number14 !== number15 && number13 !== number15) {
    console.log("The triangle is scalene");
} else {
    console.log("The triangle is isosceles");
}

// TASK NO 08:-

var number16 = prompt("enter the charcter that you want to check vowel/consonant : ");
if( (number16 === 'a' || number16 === "A") || (number16 === 'e' || number16 === "E") || (number16 === 'i' || number16 === "I") || (number16 === 'o' || number16 === "O") || (number16 === 'u' || number16 === "U") ){
    console.log("the charcter is vowel");
}
else{
    console.log("the character is consonant");
}

// TASK NO 09:-

var number17 = +prompt("enter the base value   : ");
var number18 = +prompt("enter the exponent value  : ");
var number19 = (number17)**number18;
console.log("the answer is: " + number19);

// TASK NO 10:-

var number20 = +prompt("enter the age plz : ");
if(number20 >= 65 ){
    console.log("Senior");
}
else if(number20 >= 20 && number20 <=64){
    console.log("adult");
}
else if(number20 >= 13 && number20<=19){
    console.log("teenage");
}
else if(number20 >= 0 && number20<=12) {
    console.log("child");
}