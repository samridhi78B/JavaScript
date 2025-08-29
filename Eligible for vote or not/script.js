const myinput = document.getElementById("myinput");
const mybtn = document.getElementById("mybtn");
const result= document.getElementById("result");
let age;
mybtn.onclick = function(){
    age = myinput.value;
    age=Number(age);
    if(age >= 18){
        result.textContent="You are eligible to vote!!";
    }
    else if(age <= 0){
        result.textContent="Please enter a valid age!!";
    }
    else {
        result.textContent="You are not eligible to vote!!";
    }
}
