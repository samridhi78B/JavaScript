const incremenet = document.getElementById("incremenet");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const countLabel = document.getElementById("countLabel");
let count =0;

incremenet.onclick=function(){
    count++;
    countLabel.textContent =count;
}

reset.onclick=function(){
    count=0;
    countLabel.textContent =count;
}

decrement.onclick=function(){
    count--;
    countLabel.textContent =count;
}
