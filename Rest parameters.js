// rest parameters ->used as parameters (allows function to work with variable number of arguments by bundling them into an array)
function sum(...numbers){
    let ans=0;
    for(let num of numbers){
        ans += num;
    }
    return ans;
}
function avg(...numbers){
    let ans=0;
    for(let num of numbers){
        ans += num;
    }
    return ans/numbers.length;
}
const total = sum(1,2,5,8);
const total_average = avg(34,35);
console.log(`${total}`);
console.log(`${total_average}`);


function combineString(...strings){
    return strings.join(" ");
}
const fullName = combineString("Miss","Samridhi","Gumber");
console.log(fullName);
