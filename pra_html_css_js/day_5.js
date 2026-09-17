// block of code that performs a specific task,can be invoked whenever needed
// function definition -This is used toexplain what needs to be done.
// function myFunction(){ console.log("Welcome to apna college"); console.log("We are learning js:");}myFunction();

//functiom parameter-This is used to get work done.
// function myFunction(msg){ // parameter ->input
//  console.log(msg);
// }myFunction("I love Js"); // this value being passed inside a function call is called an argument.

// function sum
// function sum(x,y){ s = x+y; return s; } let val = sum(3,5); console.log(val); //(x+y)-> local variable this scope variable kaha tak jinda rahega
//function parameter->like local variable of function ->block scope

// arrow function - compact(little) way of writing a function
// sum using arrow
// function sum(a,b){ return a+b;}
// // modrn js -> arrow function
// const arrowSum = (a,b) => { //console.log(a+b);
//     return a +b};
// //multiplication function 
// function mul(a,b){return a*b;}
//  const arrowMul = (a,b) => { // console.log( a*b); //change the variable using the 'let'
//     return a*b;
// }; // arrowMul = 5;

// const printHello = () => { console.log("hello");}

// // multiplication function
// function Mul(x,y){ Mul =x * y;  return Mul;}
// const arrowMul = (a,b) => { console.log(a * b);};
//withour =t using argument
// const printHello =() => { console.log("Hello");};

// Q1. Create a function using the function keyword that takes a string as a an argument & returns the number of vovels in the storing.
// function countvowels(str) {
//     // apna college count =0;
//     for (const char of str) {
//         console.log(char);
//     }
//  }
// function countvowels(str) {
//     // apna college 
//     let count =0;
//     for (const char of str) {
//       if(char === "a"||char === "e"|| char === "i"|| char === "o"|| char === "u") 
//         {
//         count++;
//       }
//     } console.log(count);
//  }

// Q2 .create a arrow d=function to pwrform the same task.
// const countVow = (str)=> {
//     let count =0;
//     for(const char of str){
//         if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){ 
//             count++;
//         }
//     }return count;
// }

// for each loop in array -method
// call back function: - here,is a fucntion to excutefor each lement in the array              // function in js : a functio can be written like a variable and lso passed as an argument.  
//  A callback is a function passed as an argument to another function                           // foreach only use for array conot use for string ( get the error)

// interview question
// who played th e higher order function/method?
// answer : ForEach loop (HOF / HOM) in array playes higher order function paraeter  or returns a functon is called a higher order function

// synatx:
// arr.forEach((val)=> {
//  console.log(val);
// });

// ex:
// let arr =[1,2,3,4,5,6];
// arr.forEach(function printVal(val) { //value at each idx
// console.log(val);   
// });


// arrow
// arr.forEach((val)=>{
//     console.log(val);
// });

// cities
// let arr = ["pune","mumbai","amedabad"];       // 3 types parameter - variable (ex,item),idx(position), arry(it self)
// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });

// Q.1 , For a given array of numbers,print the square of each value using the forEach loop.
// let nums = [2,3,4,5,6];
// use for forEach loop
// nums.forEach((num) => { console.log(num * num); // num**2;
//     });

    // 2.method arrow funtion
// let calcSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);


// Array methods
// 1.Map method:- same(foreach) map new return array. foreach not return a new array
// Create a new array with the results of some operation. The value its callback returns are used to form new array.

// synatx: - arr.map(callbackFnx(value,ind, array))
// ex: let newArr = arr.map((val) =>{
    // return val =2;
    // });

    // nums
    // let nums=[67,52,39];
    // let NewArray = nums.map((val) => {
    //    return val *2;
    // });console.log(NewArray);


    // 2. filter method : - Create a new array of elements that give true for a condition /filter
    // syntax: ex.
    // let newArr = arr.filter((val)=> {
    //     return val % 2 === 0;
    // }); console.log(evenArr);

    // num even
    // let arr =[1,2,3,4,5,6,7];
    // let evenArr = arr.filter((val)=>{
    //     return val % 2 ===0;
    // }); console.log(evenArr);
    
// odd
    //  let oddArr = arr.filter((val)=>{
    //     return val % 2 !==0;
    // }); console.log(oddArr);
    
    // >3
    //  let evenArr = arr.filter((val)=>{
    //     return val>3;
    // }); console.log(evenArr);


    // 3.Reduce mehod: -Persorms some operation &  reduces the array to a single value.It returns that single value.
    // sum using reduce mehod
    //  let arr =[1,2,3,4];
    //  const output = arr.reduce((res,curr)=> {   //res = previous= pre
    //     return res+ curr;
    //  }); console.log(output);  //10

    // largest element
    // let arr=[5,6,2,1,3];
    // const output = arr.reduce((prev, curr) => {
    //     return prev > curr ? prev : curr;
    // }); console.log(output);  //6

    // Q.1 ., we are given array of marks students.Filter out of the marks of students that score 90+.
    // let marks =[ 80,88,93,95,90,49,86];

    // let topper = marks.filter((val)=>{
    //    return val > 90;
    // });console.log(topper);
// output: 93,95

// Q2. (i) . Take a number n as input from user.Create an array of numbers from 1 to n.
// (ii). use the reduce method to calculate sum of all numbers in array.
// (iii).use the reduce method to calculate product of all numbers in the array.

// ans :
// (i)/
// let n=prompt("Enter a number:");
// let arr=[];

// for(let i =1; i <=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// // (ii)
// let sum = arr.reduce((prev,curr) => {
//     return prev +curr;
// });
// console.log("sum=",sum);
// // (iii)
// let factorial = arr.reduce((res, curr)=> {
//     return res * curr;
// });
// console.log("factorial = ",factorial);