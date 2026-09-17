
// for,do-while,while,infinite, for of ,for in loops

// for loop
//printf the 5 time "apna college" using for loop
// for(let i=1;i<=5;i++){console.log("apnacollege");}

// calcultae the sum of 1 to 5
// let sum = 0;
// for(let i=1;i<=5;i++){sum+=i; }console.log("Sum = ",sum);

// print 1 to 5
// for(let i=1;i<=5;i++){console.log("i= ",i);}

// infinite  never use in real life
// for(let i=1; i>0 ;i++){
//     console.log("i =",i);
// }

// while loop
// let i=1;
// while(i<=5){
// console.log("i=",i);
// i++;}

// do while loop
// let i=2;
// do{
//     console.log("apnacollege");
//     i++;
// }while(i<=1);

// for of loop
// let str="apnacollege"; 
// for(let val of str){ console.log(val);}

// for in loop(objrct)
// let student ={
//     name:"apna",
//     age:20,
//     cgpa:9.5,
//     isPass:true
// };  for(let key in student){console.log("key =",key, "value= ",student[key]);}

// practice problem1
//  print all even numbers from 1 to 100
// for(let num =1;num<=10;num++){
//     if(num % 2==0){ console.log("num = ",num);}
// }
 //print all odd numbers from 1 to 100
// for(let num =1;num<=10;num++){
//     if(num % 2!=0){ console.log("num = ",num);}
// }
//problem 2
//create a game where you start with any random game number. Ask the user to keep guessing the number until the user enter correct value.
// let gameNum = 25;
// let userNum = prompt("Guess the game number :");
// while(userNum != gameNum){ userNum = prompt("you entered wrong number,guess again!:");} 
// console.log("congratulations! you guessed the right number");