function palindrome(str) {
  let str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let rStr = cleanStr.split('').reverse().join('');
  return str === rStr;
}