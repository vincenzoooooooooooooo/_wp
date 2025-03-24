function countLetters(str) {
    let letterMap = new Map();
   
   for (let char of str) {
       letterMap.set(char, (letterMap.get(char) || 0) + 1);
   }
   
   return letterMap;
}
console.log(countLetters("banana")); 