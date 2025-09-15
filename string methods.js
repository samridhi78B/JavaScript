
let username = "Samridhi Gumber";
console.log(username.charAt(0)); //S(character at specific index)
console.log(username.indexOf("i")); //4 (index of specific character)
console.log(username.lastIndexOf("i")); //7 (index of last time specific character repeating)
console.log(username.length); //15 (length including space)
console.log(username.trim());
console.log(username.toLowerCase()); // samridhi gumber (to lower case)
console.log(username.toUpperCase()); // SAMRIDHI GUMBER ( to upper case)
console.log(username.repeat(4)); //GumberSamridhi GumberSamridhi Gumber (repeat (how many time ))
console.log(username.startsWith("a")); //false (start with that character or not)
console.log(username.endsWith("r")); // true (end with that character or not)
console.log(username.replaceAll(" ","")); //SamridhiGumber (replace(old, new))
console.log(username.padStart(20,"0")); //00000Samridhi Gumber (add somethings at start padStart(how many times, "what to add"))
console.log(username.padEnd(20,"0")); //Samridhi Gumber00000 (add somethings at end padEnd(how many times, "what to add"))
console.log(username.includes(" ")); //true (check if includes(character) usme hai ke nhi)
//slice-> substring 
const fullName = "Samridhi Gumber";
console.log(fullName.slice(0,)); //Samridhi Gumber
console.log(fullName.slice(-1)); //r
console.log(fullName.slice(4,12)); // idhi Gum 


//Method chaining
let username = window.prompt("enter username: "); //     saMRidhi
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); //Samridhi

