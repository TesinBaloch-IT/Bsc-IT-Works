// The 3 Musketeers of Web Dev
//  html(structure)          css(style)             js(logic)
// <style> tag connects html with css
// <script>tag connect html with js
 
// advantages
// Code Reusability (Ek code, multiple pages): Ek baar .js file bana kar aap use website ke kisi bhi HTML page par link kar sakti hain. Baar-baar same code likhna nahi padta.
// Clean aur Organized Code: HTML file mein sirf webpage ka structure (HTML) rehta hai aur JS file mein logic. Isse code padhna aur manage karna aasan ho jata hai.
// Fast Page Loading (Browser Caching): Web browser External JS files ko save (cache) kar leta hai. Jab user aapki website ke doosre pages par jata hai, toh browser script ko baar-baar download nahi karta, jisse site fast load hoti hai
// Easy Maintenance & Debugging: Agar code mein koi bug (error) aaye ya update karna ho, toh sirf ek JS file mein change karna padta hai, har HTML page par jaakar edit karne ki zaroorat nahi hoti.
// Readability: Code saaf aur aasan bhasha mein ho taaki aasani se samajh aa sake.
// Modularity: Project ko chhote, alag aur reusable pieces (files) mein baantna.
// Browser Caching: Website ki files ko browser mein save rakhna taaki agli baar page fast load ho.
// Teamwork & Git Friendly: Agar multiple developers ek project par kaam kar rahe hain, toh HTML aur JS file alag hone se code conflict nahi hota aur GitHub par track karna easy hota hai

// Window object ?
// The window object represents an open window in a browser. It is a browser's object(not JavaScript's) & is automatically created by browser.
// It is a global object with lost of properties & methods.
// what is a dom?
// ans := when a web page is loaded the browser creates a documnet object midel(DOM) of the page.

// you can make dynamic changes (manipulatoin) using js.

// document.body.childNodes[3].innerText = "abcd";

// data manipulation
// 1. selecting with id :- document.getElementById("myid")
// let heading = document.getElementsById("heading");  //h1  //dir beacuse its object 
// console.dir(heading);

// // 2.selecing with class;- document.getElementByClassName("myClass") (html collection)
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// 3.selecting with tag:-document.getElementByTagName("p")
// let parahs= document.getElementsByTagName("p");
// console.dir(parahs);

// 4.Query Selectore:- document.querySelector("myId/MyClass/tag") //returns first elements
//  document.querySelectorAll("myId/MyClass/tag") //returns NodeList

// let firstEl = document.querySelector("p");//1st elements
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p"); //alllelements
// console.dir(allEl);


// console.dir(document.body.firstChild);

// properties ( gets,set , change, update)
// 1.tagName:-returns tag for elements element nodes
// ex.firstEl.tagName

// 2.innerText:returns the text content of the element and all its children  //first child navigation 
// ex. 
// let div = document.querySelector("div");
// console.dir(div);
// console write div.innerText

// 3.innerHTML :- returns the plain text or HTML content in the elements
// console.write - div.innerHTML

// 4.textContect:- returns textual contect even for hidden elements.


// Q.1 Create a H2 heading elements with text - "Hello JavaScript" .Append "from Apna College Students" to this text using js.
// let h2= document.querySelector("h2"); 
// console.log(h2.innerText);
// h2.innerText= h2.innerText +" from apna College students"; //concat

// Q2.create 3 divs with common class name  -"box".Access them & add some unique text to each of them.
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
// div.innerText = `new unique value ${idx}`; //template literels  string interpolution
// idx++;
// }

// DATA MANIPULATION
// ATTRIBUTES
// 1.getAttribute(attr) // to get the attributes value
//  use div
// let div =document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// paragraph name 
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// 2.setAttributes(att,val) // to set the attributes val th

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass")); // change the class name 


// style
// 1.node.style
// let div = document.querySelector("div");
// div.style.backgroundColor = " green";
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";

// div.style.fontSize = "26px";
// div.innerText = "Hello";

// Insert Elements
// let el=document.createElement("div");

// 1.node.append(ele) // adds at the end of node(inside)
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

//2.node.prepend(ele)  // adda at th e start of node(inside) 
// div.prepend(newBtn);

// 3.node.before(ele) // adds before the node (outside)
// div.before(newBtn);

// 4.node.after(ele) // adds after the node (outside)
// let p = document.querySelector("p");
// p.after(newBtn);


// new heading element
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!";
// document.querySelector("body").prepend(newHeading);

 // delete Element
 // 1. noe.remove() // removes the node
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// Q1.Create a new button elmemt. give it a text "click me" ,background color red & text color white . inner the button as the first element inside the bod tag.
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.color ="white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// Q2.Create a <p> tag in html,give it a class & some styling.
// Now create a new class in CSS and try to append this class to the<p> element.
// Did you notice,how you overwrite the class name when you add a new one? Solve this problem using classList. 

let para = document.querySelector("p");
para.getAttribute("class");