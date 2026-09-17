// array - collection of items (releted infermation)  length-property (property - return value ,method- she gets some work done.) (linear type - non primitive type)
// object -key metter , array -in a position metter (metter of index)
// let marks = [96,75,48,83,66]; 
// let heroes=["ironman","hulk","thor","spiderman"];
// array indices
// marks[0]; // 96 ,marks[1]= 75 

// looping over on array- print all elements of an array (loops -string- character collection,object- key values case collection ,array- type of item collection)
// for loop  (use property which is are length property)
//  let heroes=["ironman","hulk","thor","spiderman","sktiman"];
//  for(let i=0; i< heroes.length;i++){console.log(heroes[i]); }

// for of loop
// for(let hero of heroes){console.log(hero);}

// use of method:
// let cities =["delhi","pune","mumbai","hyderabad","gurgaon"];
// for(let city of cities){console.log(city.toUpperCase());}

// practice question
// Q. For a given array with marks of students-> [85,97,44,37,76,60] find the average marks of the entire class. (using - array,template liters, sum, for of ,avg ,sting concept,variable,datatype,)
// let marks = [85,97,44,37,76,60]; let sum= 0;
// for(let val of marks){sum+=val;} let avg = sum/ marks.length;console.log(`avg marks of the class=${avg}`);
// Q2. For a given arrray with prices of 5 items->[250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after appliying offer.
// let items=[250,645,300,900,50];
//  let i=0; for(let val of items){ let offer = val /10; items[i]=items[i] - offer; console.log(`val after offer =${items[i]}`); i++;}

// next method for loop
// for(let i=0;i< items.length;i++){ let offer=items[i]/10; items[i] -=offer;}console.log(items);

// array methods 
// 1.Push(): - some method can be change some method create new array) add to end
// let foodItems= ["potato","tomato","apple","litchi"]; foodItems.push("chips"); console.log(foodItems);

//2.pop():- delete from end value
// let foodItems= ["potato","tomato","apple","litchi"];console.log(foodItems);let deletedItem = foodItems.pop(); console.log(foodItems); console.log("deleted",deleteItems);

//3.tostring():- convert array to string
// let foodItems= ["potato","tomato","apple","litchi"];console.log(foodItems);console.log(foodItems.tostring());console.log(foodItems)


// 4.concat():- joins multiple arrays & return result.
// let marvelHeroes=["ironman","hulk","thor","spiderman"]; let dcHeroes =["superman","batman"]; 
// let Heroes =marvelHeroes.concat(dcHeroes); console.log(Heroes);

// 5.unshift():- add to start (works like of push but(push add the end) unshirf add the start)
// let marvelHeroes=["ironman","hulk","thor","spiderman"];marvelHeroes.unshift("antman");

// 6.shift():- deleted from start & return ( wrks like of pop but( delete from end value) shirf delete the start value)
// let marvelHeroes=["ironman","hulk","thor","spiderman"]; let val = marvelHeroes.shift(); console.log("deleted",val);

// 7slice():- returns apiece of the array. (original array donot change)
// let marvelHeroes=["ironman","hulk","thor","spiderman"]; console.log(marvelHeroes); console.log(marvelHeroes.slice(1,2));

// 8.splice():- change original array(add, remove, replace)
// add number
// let arr =[1,2,3,4,5,6,7]; arr.splice(2,2,101,102);

// add element spicific space
// let arr =[1,2,3,4,5,6,7];  arr.splice(2,0,102);

// delete number
// let arr =[1,2,3,4,5,6,7]; arr.splice(3,1);

// replace number
// let arr =[1,2,3,4,5,6,7]; arr.splice(3,1,101);

// Q.create an array to store companies ->"Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the arry b. Remove Uber & add Ola inits place c. Add Amazon at the end

 //let company= ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
//  company.shift();

// company.splice(2,1,"Ola");
// company.push("Amazon");