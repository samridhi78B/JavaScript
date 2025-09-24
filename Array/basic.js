
let fruits = ["apple","orange","banana","kiwi"];
fruits.push("berry");  //append at last ['apple', 'orange', 'banana', 'kiwi','berry']
fruits.pop();  //remove last ['apple', 'orange', 'banana', 'kiwi']
fruits.unshift("dragonfruit"); //add in beginning  (['dragonfruit', 'apple', 'orange', 'banana', 'kiwi'])
fruits.shift("dragonfruit"); //remove from beginning ['apple', 'orange', 'banana', 'kiwi']
console.log(fruits.indexOf("apple")); //0 index of specific val
console.log(fruits.length); //4
console.log(fruits);


fruits.sort(); //sort according to alphabet or numbers
fruits.reverse(); //reverse order
// Method 1
for(let fruit of fruits){
    console.log(fruit); // print all values
}


//Method 2
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]); // print all values
}

// Method 3
for(let i=fruits.length-1; i>=0;i--){
    console.log(fruits[i]); // print all values in reverse order
}
