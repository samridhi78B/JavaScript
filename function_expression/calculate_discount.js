const calc_discount=function(price, percentage){
    const total=price - price * (percentage/100);
    return total;
}
console.log(calc_discount(1000,20)); //800
