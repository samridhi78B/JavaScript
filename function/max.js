function findMax(a,b,c){
    if(a>b && a>c) {
        return a;
    }
    else if(b>c){
        return b;
    }
    else{
        return c;
    }
}
let maximum=findMax(9,12,5);
console.log(maximum); //12
