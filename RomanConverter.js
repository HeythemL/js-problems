function convertToRoman(num) {
  let roman = '';
  while (num > 0) {
    switch (1 == 1) {
      case num >= 1000:
        roman += 'M';
        num -= 1000;
        break;
      case num >= 900:
        roman += 'CM';
        num -= 900;
        break;
      case num >= 500:
        roman += 'D';
        num -= 500;
        break;
      case num >= 400:
        roman += 'CD';
        num -= 400;
        break;
      case num >= 100:
        roman += 'C';
        num -= 100;
        break;
      case num >= 90:
        roman += 'XC';
        num -= 90;
        break;
      case num >= 50:
        roman += 'L';
        num -= 50;
        break;
      case num >= 40:
        roman += 'XL';
        num -= 40;
        break;
      case num >= 10:
        roman += 'X';
        num -= 10;
        break;
      case num >= 9:
        roman += 'IX';
        num -= 9;
        break;
      case num >= 5:
        roman += 'V';
        num -= 5;
        break;
      case num >= 4:
        roman += 'IV';
        num -= 4;
        break;
      case num >= 1:
        roman += 'I';
        num -= 1;
        break;
    }
  } 
  return roman;
}
