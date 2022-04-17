const cipher = {

  encode (messageBox1, shift) { 
    let result = "", code;
    for (let i=0; i<messageBox1.length;i++){
      if (messageBox1.charCodeAt(i)>=65 && messageBox1.charCodeAt(i)<=90){
        code = (((messageBox1.charCodeAt(i)-65)+shift)%26)+65;
      }
      else if (messageBox1.charCodeAt(i) >= 33 && messageBox1.charCodeAt(i) <= 66) {
        code = (((messageBox1.charCodeAt(i) + 33) - shift) % 33) + 33; 
      }
      else if (messageBox1.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },


  decode (messageBox2, shift2) {
    let result = "", code;
    for (let i=0; i<messageBox2.length;i++){ 
      if (messageBox2.charCodeAt(i)>=65 && messageBox2.charCodeAt(i)<=90){
        code = (((messageBox2.charCodeAt(i)+65)-shift2)%26)+65;
      }
     else if (messageBox2.charCodeAt(i) >= 33 && messageBox2.charCodeAt(i) <= 66) {
        code = (((messageBox2.charCodeAt(i) + 33) + shift2) % 33) + 33;
      }
      else if (messageBox2.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },
};

export default cipher;