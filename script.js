function convertToRoman(num) {
 let numerals = {
   1000 : 'M',
   900 : 'CM',
   500 : 'D',
   400 : 'CD',
   100 : 'C',
   90 : 'XC',
   50 : 'L',
   40 : 'XL',
   10 : 'X',
   9 : 'IX',
   5 : 'V',
   4 : 'IV',
   1 : 'I'
 };

 let romanNum = "";
 let numKeys = Object.keys(numerals).map(Number).sort((a, b) => b - a);
 
 for(let i = 0; i < numKeys.length; i++) {
   let key = numKeys[i];
   while(key <= num) {
     romanNum += numerals[key];
     num -= key
   }
 }
 return romanNum;
}

console.log(convertToRoman(36));
