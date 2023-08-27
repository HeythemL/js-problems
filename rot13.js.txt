function rot13(str) {
  let str2 = '';
  let asciCode;
  for (let char of str){
    if(!/[a-zA-Z]/.test(char)){
      str2 += char;
    }else{
      if(char.toUpperCase() < 'N'){
        asciCode = char.charCodeAt(0) + 13;
      }else{
        asciCode = char.charCodeAt(0) - 13;
      }
      str2 += String.fromCharCode(asciCode);
    }
  }
  return str2;
}