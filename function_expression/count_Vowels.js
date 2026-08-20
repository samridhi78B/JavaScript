const countVowels=function(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="u" || str[i]=="o"){
            count++;
        }
    }
    return count;
};
console.log(countVowels("javaScript"));
