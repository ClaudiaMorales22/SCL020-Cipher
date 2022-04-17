import cipher from './cipher.js';

//console.log(cipher);

//Decipher 

document.getElementById("descifrarmensaje").addEventListener("click", function () {
    let messageBox2 = document.getElementById("message2").value; 
    let shift2 = parseInt(document.getElementById("desplazamientoDes").value);
    let result =cipher.decode(messageBox2, shift2);
    document.getElementById("resultado2").value = result;
    });