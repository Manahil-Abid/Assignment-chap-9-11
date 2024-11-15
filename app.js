/*. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”
*/
// let city = prompt ("Enter a City name");
// city = city.toLowerCase();
// if (city === "karachi"){
//    document.write(' Welcome to city of lights');
// }
// else{
//     document.write('Please!! Enter a right name');
// }
//------------------------------------------------------//
/*. Write a program to take “gender” as input from user. If the 
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am. */
// let gender = prompt ('Enter your gender');
// gender = gender.toLowerCase();
// if (gender === 'male'){
//     document.write('Good Morning Sir!!');
// }
// else if (gender === 'female'){
//     document.write('Good Morning Maam!!');
// }
// else {
//     document.write('Gender is not Identified!!')
// }
//--------------------------------------------------------//
/*. Write a program to take input color of road traffic signal 
from the user & show the message according to this table: 
Signal color  
Red     Must Stop 
Yellow  Ready to move
Green   Move now
 */
// let color = prompt ('Enter a color of road traffic signal');
// color = color.toLowerCase();
// if (color === 'red'){
//     document.write('Must Stop');
// } 
// else if (color === 'yellow'){
//     document.write('Ready to Move');
// }
// else if (color === 'green'){
//     document.write('Move now');
// }
// else{
//     document.write('Invalid');
// }
//-------------------------------------------------------------//
/*Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car” */
// let fuel = prompt('remaining fuel in car(in litres)');
// fuel = fuel.toLowerCase();
// if ( fuel <= 0.25){
//     document.write("Please refill the fuel in the car");
// }
// else if ( fuel >= 0.25){
//     document.write("Tank Full");
// }
// else{
//     document.write('please mention a right value in litre');
// }
//---------------------------------------------------------------//
/*
Run this script, & check whether alert message would be 
displayed or not. Record the outputs. 
a. var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}-
b. var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
c. var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
}  */
// let a = 4;
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }

// let b = 82;
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 

// let c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// else if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// else if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// else if(c === 14){ 
//     alert("condition 4 is true"); 
// }
/*d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} */

// let materialCost = 20000; 
// let laborCost = 2000; 
// let totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
/*e. if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
} */
// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// } // output true
/*f. if("car" < "cat"){ 
alert("car is smaller than cat"); 
} */ 
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// } // output;The alert "car is smaller than cat" 

/*Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table: */
// Take input for marks obtained in three subjects and total marks
// let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
// let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
// let subject3 = parseInt(prompt("Enter marks for Subject 3:"));
// let totalMarks = 300;

// // Calculate the total marks obtained
// let marksObtained = subject1 + subject2 + subject3;

// // Calculate the percentage
// let percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>","MARKSHEET,","</h1>");
// document.write("<h1>","TOTAL MARKS,",totalMarks,"</h1>");
// document.write("<h1>","MARKS OBTAINED,",marksObtained,"</h1>");
// document.write("<h1>","PERCENTAGE","",percentage,"</h1>");
// document.write("<h1>","GRADES","",grade,"</h1>");

// // Determine the grade and remarks based on the percentage

// if (percentage >= 80 ) {
//     document.write( "Grade" ," ","A-one", " ","Remarks"," ","Excellent");
// } else if (percentage >= 70 ) {
//     document.write( "Grade" ," ","A", " ","Remarks"," ","Good");
// } else if (percentage >= 60) {
//     document.write( "Grade" ," ","B", " ","Remarks"," ","You need to improve");
// } else {
//     document.write("Sorry Fail");
// }
//7. Guess game:
// let num = 5;
// let guess = prompt("Guess a secret number");

// guess = parseInt(guess);

// if (guess === num) {
//     document.write("Bingo!! Correct Answer");
// } 
// else if (guess === num + 1 || guess === num - 1) {
//     document.write("Close enough to the correct answer");
// } 
// else {
//     document.write("Sorry!! Try Again");
// }

/*8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
*/

// let num = prompt("Enter a number:");

// // Convert the input to an integer
// num = parseInt(num);

// // Check if the number is divisible by 3
// if (num % 3 === 0) {
//     document.write("The number is divisible by 3.");
// } else {
//     document.write("The number is not divisible by 3.");
// }
/*Write a program that checks whether the given input is an even number or an odd number.*/
// let num = prompt("Enter a number:");

// // Convert the input to an integer
// num = parseInt(num);
// if (num % 2 === 0) {
//     document.write("The number is Even.");
// } else {
//     document.write("The number is Odd.");
/*10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”*/

// let temperature = prompt("Enter the temperature:");
// temperature = parseInt(temperature);
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It’s cold outside.");
// }
/*Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.*/

// let num1 = prompt("Enter the first number:");
// num1 = parseFloat(num1);

// let num2 = prompt("Enter the second number:");
// num2 = parseFloat(num2);

// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result;
// if (operation === "+") {
//    document.write(result = num1 + num2);
// } else if (operation === "-") {
//     document.write("Result",result = num1 - num2);
// } else if (operation === "*") {
//     document.write("Result",result = num1 * num2);
// } else if (operation === "/") {
//     // Check for division by zero
//     if (num2 === 0) {
//         document.write("Result",result = "Error! Division by zero.");
//     } else {
//         document.write("Result",result = num1 / num2);
//     }
// } else if (operation === "%") {
//    document.write("Result",result = num1 % num2);
// } else {
//    document.write( "Result",result = "Invalid operation!");
// }




