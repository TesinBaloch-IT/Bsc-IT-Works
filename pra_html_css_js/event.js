// Events in JS:=

// Events are fired to notify code of "interesting changes" that may affect code execution.
// The change in the state of an object is known as an Event

// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more

//heandling 3 type :
// 1.inline or 2.js heandling event listeners
// first priority - js heandling      , best type suing of the event listeners
// 1 event heandling -only one time using 

// 2.Event Handling in JS  -externaly heandling
// synatx:
// node.event = ( ) => {
// //handle here
// }

// btn.onclick = ( ) => {
// console.log(“btn was clicked”);
// }


// external event heandling
// let btn1= document.querySelector("#btn1");
// btn1.onclick = () => {
// console.log("btn1 was clicked!");
// let a =25;
// a++;
// console.log(a); //26
// };

// let div = document.querySelector("div");
// div.onmouseover = ()=>{
//     console.log("you are inside div");
// };

// Event Object

// It is a special object that has details about the event.  //It saves the background information in our object. 
// All event handlers have access to the Event Object's properties and methods.
//event - e
// syntax
// node.event = (e) => {
// //handle here
// }

// e.target, e.type, e.clientX, e.clientY
// let btn1= document.querySelector("#btn1");
// btn1.onclick = (evt) => {
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY);
// };


//3. Event Listeners you can handle multiple tasks during the evening event.

// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )
// *Note : the callback reference should be same to remove
// add
// let btn1= document.querySelector("#btn1");
// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });

// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler2");
// });

// let div = document.querySelector("div");

// remove
// let btn1= document.querySelector("#btn1");


// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler1");
// });
// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler2");
// });
// const handler3 = ("click",() => {
//     console.log("button1 was clicked - handler3");
// });
// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click",handler3);

// Q1.create a toggle button that change the screen to dark mode when clicked & light mode clicked again .  toggle -means switch
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";  //dark
modeBtn.addEventListener("click", () => {
if(currMode ==="light"){
    currMode="dark";
   body.classList.add ("dark");
   body.classList.remove ("light");
}else{
    currMode="light";
    body.classList.add ("light");
    body.classList.add ("dark");
}
console.log(currMode);
})

