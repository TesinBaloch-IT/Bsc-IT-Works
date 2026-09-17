//variable,data type, 
// operators,consitional statements 
// practice 1 product ,profile
// const product ={
//     title: "Balpen",
//     price: 10,
//     offer: 5,
//     rating: 4
// }; console.log(typeof product["title"]);

//profile
// const profile = {
//     username: "Rahul",
//     follower: 123,   
//     isfollow: false,
//     following: 123,
// }; console.log(profile);

// arithmetic operators
// let a = 5; let b = 2;
// console.log("a = ",a, "& b = ",b);
// console.log("a - b= ", a - b);
// console.log("a * b= ", a * b);
// console.log("a / b= ", a / b);
// console.log("a % b= ", a % b);
// console.log("a ** b= ", a ** b);

// unary operators
// let a = 5; let b = 2;
// console.log("a = ",a);
// console.log("++a = ",++a);

// assignment operators
// let a = 5; let b = 2;
// a +=4;
// console.log("a = ", a);

// comparison operators
// let a = 5; let b = 2;
// console.log("a >= b= ", a >= b);

// logical operators
// let a = 5; let b = 2;
// console.log(" a > b && b < a = ", a > b && b < a);
// cond1 = a > b;
// cond2 = a  ===5;
// console.log( "cond1 && cond2 = ", cond1 && cond2);
// console.log("!( a > b =)", !(a> b));

//conditional statement
// if 1.ex mode
// let mode = "dark";
// let color;
// if( mode === "dark"){
//     color = "black";
// } console.log(color);

//2.ex if age
// let age = 25;
// if( age >= 18) {
//     console.log("vote");
// }if( age <= 18) {
//     console.log("not vote");
// }

// if else
    // 1.ex mode
// let mode = "pink";
// let color;
// if( mode === " dark"){
//     color = "black";
// }else {
//     color = "white";
// }console.log(color);

// ex2.age
// let age = 14;
// if( age >= 18){
//     console.log("vote");
// }else{
//     console.log("notvote");
// }

// odd and even
// let num = 48;
// if( num % 2 === 0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }

// else if age
// let age = 50;
// if( age >= 18) {
//     console.log("Junior");
// }else if(age <= 18){
//     console.log("Senior");
// }else{
//     console.log("middle");
// }

// mode else if
// let mode = "blue";
// let color;
// if( mode === "dark"){
//     color = "black";
// }else if( mode === "ligth"){
//     color = "white";
// }else if(mode === "pink"){
//     color = "pink";
// }else{
//     color = "silver";
// }console.log(color);

// ternory operators
// let age = 25;
// let result = age > 18 ?console.log("adult") :console.log("notadult");

// prompt using
// alert("hello!");

//practice 2
// 1. - get user to input number using prompt("Enter a number:") check if the numebr is a multiple of  5 or not.
//   let num = prompt("Enter a number:");
//   if( num % 5 === 0){
//     console.log(num," is multiple of 5");
//   }else {
//     console.log(num," is cannot multiple of 5");
//   }

// 2.Write a code which  can give grodes to students according to thier scores.
// 80-100, A , 70-89 , B, 60-59, C, 50-59,D , 0-49,F
// let score = prompt("Enter your score(0-100):");
// let grade;
// if( score >= 90 && score <= 100){
//     grade = "A";
// }else if( score >=70 && score <= 89){
//     grade = "B";
// }else if( score >= 60 && score <= 69){
//     grade = "C";
// }else if( score >= 50 && score <= 59){
//     grade = "D";
// }else if( score >= 0 && score <= 49){
//     grade = "F";
// }
// console.log("according your scores, your grade was:",grade);
