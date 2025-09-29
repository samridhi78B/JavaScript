
// callback->a function that is passed as an argument to another.It is used to handle asynchronous operations like reading a file, network requests and interacting with databases

// sum(display,4,5);
// function sum(callback,x,y){
//   let res = x+y;
//   callback(res);
// }
// function display(res){
//   console.log(res);
// }



// forEach 
// let numbers = [1,2,3,4,5];
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element,index,array){
//   array[index] = element *2;
// }

// function display(elements){
//   console.log(elements);
// }

// eg1 (APPLE
// MANGO
// ORANGE
// BANANA
// KIWI)
// let fruits = ["apple","mango","orange","banana","kiwi"];

// fruits.forEach(upperCase);
// fruits.forEach(display);


// function upperCase(element,index,array){
//   array[index] = element.toUpperCase();
// }

// function display(element){
//   console.log(element);
// }

// eg2 (apple
// mango
// orange
// banana
// kiwi)

// let fruits = ["apple","mango","orange","banana","kiwi"];

// fruits.forEach(lowerCase);
// fruits.forEach(display);


// function lowerCase(element,index,array){
//   array[index] = element.toLowerCase();
// }

// function display(element){
//   console.log(element);
// }

//eg3 (Apple
// Mango
// Orange
// Banana
// Kiwi)
// let fruits = ["apple","mango","orange","banana","kiwi"];

// fruits.forEach(capitalize);
// fruits.forEach(display);


// function capitalize(element,index,array){
//   array[index] = element.charAt(0).toUpperCase()+ element.slice(1);
// }

// function display(element){
//   console.log(element);
// }
