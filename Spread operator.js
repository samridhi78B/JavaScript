// Spread operator(...) -> unpack elements
let numbers = [1,2,3,4,5];
let maxNumber = Math.max(...numbers); 
console.log(maxNumber); //5



let username = "Samridhi Gumber";
let letters = [...username];
console.log(letters); //['S', 'a', 'm', 'r', 'i', 'd', 'h', 'i', ' ', 'G', 'u', 'm', 'b', 'e', 'r']

let username1 = "Samridhi Gumber";
let letters1 = [...username1].join("-"); //S-a-m-r-i-d-h-i- -G-u-m-b-e-r
console.log(letters1); //['S', 'a', 'm', 'r', 'i', 'd', 'h', 'i', ' ', 'G', 'u', 'm', 'b', 'e', 'r']


let fruits=['apple','mango','guava'];
let veges = ['potato','tomato','onion'];
let foods = [...fruits,...veges]; // to add arrays (like union of two) 
console.log(foods); //['apple', 'mango', 'guava', 'potato', 'tomato', 'onion']
