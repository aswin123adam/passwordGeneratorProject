const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordhistory = [];
let password1 = "";
let password2 = "";
let length = 15;

const input = document.getElementById("inputtext");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

function checkText(){
if(input.value != "")
length = input.value;
else
length = 15;
}

function clearPass(){
    password1 = "";
    password2 = "";
}
// Generating Password -----------------------------------------
function generatePass(){
    checkText();
    clearPass();
    console.log(length);
for(let i = 0; i < length ; i++){
   
 password1 += (characters[Math.floor(Math.random()*90)])
}

for(let i = 0; i < length ; i++){
 password2 += (characters[Math.floor(Math.random()*90)])
}
passwordhistory.push(password1);
passwordhistory.push(password2);

pass1.textContent = password1;
pass2.textContent = password2;
console.log(password1);
console.log(password2);
// console.log(passwordhistory);
}

//--------------------------------------------------------------



//navigator.clipboard.writeText(password1);
