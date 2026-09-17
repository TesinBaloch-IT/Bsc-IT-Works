// method
//create a string, 1.str length
// let str = "apna";
// let str2 = 'college';
// internal value hoti he
// str.length->4

// str Indices(multiple)(index- single)(individual character accesss)
// let str = 'apna';
// console.log(str[3]);

// simple ex of template literal
// let obj ={
//     item :"pen", price:10
// }; 
// let output = `the cost of ${obj.item} is ${obj.price} rupees`; console.log(output);
// console.log("the cost of",obj.item, "is", obj.price,"rupees");

// template literals - specialtype string - A way to have embedded exprission in strings
// let specialString = `This is a template literal`;  // first calculate the value before make the string part
// console.log(typeof specialString);

// string interpolation
// to create strings by subsititution of placeholder
// `string text${expression}string text`
// let specialString = `This is a template literal ${1+2+3}`; (expresion) // first calculate the value before make the string part
// console.log(specialString);

// escap character
// console.log("apna\ncollege") ;(length count the single character type)

// string method - these are built-in functons to manipulate a string (method is like a block of code)
// 2.uppercase
// let str ="apna"
// str = str.toUpperCase();console.log(str); (js donot change string -immutble in js string)
// 3.lowercase
// let str="apna"; str =str.toLowerCase();console.log(str);

// 4.trim() remove the white spaces
// let str ="       apna  js "; console.log(str.trim());

// 5.slice method 
// let str ='0123456';
// console.log(str.slice(1,5));

// 6.concat method
// let str1= "apna"; let str2="college"; let res=str1.concat(str2); console.log(res);
// let res = str1 +str2; // let res = "i am learning coding from"+ str1 +str2;

// 7.replace method
// let str="hello"; console.log(str.replace("h","y")); // conosle.log(str.replace("lo",p));
//  or replace All mehod
// let str="apna"; console.log(str.replaceAll("a","A"));

// 8.character at method
// let str ="I love js"; console.log(str.charAt(3));

// or i replace the s
// let str = "I love js";  console.log(str.replace("I","s"));

// practice 
// 1. prompt the user to enter their fullname generate a user name for them based on the input. start user name with @ followed by their full name & ending with the full name length.
// Ex. username = " Shradhkhapra". username should be "@shradhakhapra13".
// let fullName = prompt("Enter your fullname without spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
