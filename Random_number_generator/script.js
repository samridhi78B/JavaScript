const mybutton = document.getElementById("mybutton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min=1;
const max=6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

mybutton.onclick = function (){
    randomNumber1=Math.floor(Math.random() * max ) + min;
    randomNumber2=Math.floor(Math.random() * max ) + min;
    randomNumber3=Math.floor(Math.random() * max ) + min;

    mylabel1.textContent = randomNumber1;
    mylabel2.textContent = randomNumber2;
    mylabel3.textContent = randomNumber3;
}
