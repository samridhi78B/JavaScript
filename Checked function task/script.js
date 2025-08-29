const mycheckbox =document.getElementById("mycheckbox");
const GooglePay=document.getElementById("GooglePay");
const Paytm=document.getElementById("Paytm");
const Bhim_UPI=document.getElementById("Bhim_UPI");
const mybtn=document.getElementById("mybtn");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");

mybtn.onclick=function(){
   if(mycheckbox.checked){
    p1.textContent="You are subscribed";
   } 
   else{
     p1.textContent="You are not subscribed";
   }

   if(Paytm.checked){
    p2.textContent="Mode : Paytm";
   }
   else if(GooglePay.checked){
    p2.textContent="Mode : GooglePay";
   }
   else if(Bhim_UPI.checked){
    p2.textContent="Mode : Bhim UPI";
   }
   else{
    p2.textContent="You must select a Payment mode";
   }
}
