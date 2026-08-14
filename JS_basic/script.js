// "JavaScript is a high-level programming language mainly used to add dynamic behavior and interactivity to web applications. It can run in browsers and can also be used on the server with environments like Node.js. For example, JavaScript can handle user interactions, manipulate web pages, validate forms, and communicate with APIs."


console.log("Hello world"); //Print in console
// console-object provided by environment
//  . - to access something belonging to console
//  log - function to display info
// ("name") - value passed to function


console.log("My name is Sam")
console.log("I am learning JavaScript")
console.log("JavaScript is interesting")
console.log("My age is 20")

const btn=document.getElementById("mybutton");
const heading=document.getElementById("myheading");
btn.addEventListener("click",function() {
    heading.textContent="JavaScript is Fun";
});
