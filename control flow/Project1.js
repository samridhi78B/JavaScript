
let n=10;
console.log("PRINT NUMBERS 1TON")
for(let i=1;i<=n;i++){
     console.log(i);
}

let sum=0
for(let i=1;i<=n;i++){
     sum+=i;
}
console.log("SUM: " ,sum);

let evenCount=0;
let oddCount=0;
for(let i=0;i<n;i++){
     if(i%2==0) evenCount++;
     else oddCount++;
}
console.log("EVEN NUMBERS: ",evenCount);
console.log("ODD NUMBERS: ",oddCount);

PRINT NUMBERS 1TON
1
2
3
4
5
6
7
8
9
10
SUM:  55
EVEN NUMBERS:  5
ODD NUMBERS:  5
