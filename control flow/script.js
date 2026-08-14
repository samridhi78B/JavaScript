// 1 
let age=20;
if(age>=18){
    console.log("Eligible to vote"); //Eligible to vote
} 
else{
     console.log("Not eligible to vote");
}

 


// 2
let number=7;
if(number == 0){
     console.log("Zero");
}
else if(number>0){
     console.log("Positive"); //Positive
}
else{
     console.log("Negative");
}




// 3
let marks=82;
if(marks>=90){
     console.log("A");
}
else if(marks >=75 && marks < 90){
     console.log("B"); //B
}
else if(marks>=50 && marks <75){
     console.log("C");
}
else {
     console.log("Fail");
}




// 4
let age1=22;
let haslicence=false;
if(age1>=18 && haslicence){
     console.log("You can Drive");
}
else{
     console.log("You can't Drive"); //You can't Drive
}




// 5
let username="Samridhi";
let password="12345";
if(username=="Samridhi" && password=="12345"){
     console.log("Login successful"); //Login successful
}
else{
     console.log("Invalid username or password");
}


//6
let age2=20;
let result = age2>=18 ? "Adult" : "Not Adult";
console.log(result); //Adult

//7
let day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); //Tuesday
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;    
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day"); 
}
