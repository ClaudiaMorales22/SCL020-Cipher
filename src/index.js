import cipher from './cipher.js';

//console.log(cipher);

document.getElementById("message").addEventListener("keyup", myFunction);
function myFunction (){
    var x = document.getElementById("message");
    x.value = x.value.toUpperCase();
}


//Cipher 

document.getElementById("cifrarmsj").addEventListener("click", function () {
let messageBox1 = document.getElementById("message").value; 
let shift = parseInt(document.getElementById("desplazamientoci").value);
let result =cipher.encode(messageBox1, shift);
document.getElementById("resultado").value = result;
});



