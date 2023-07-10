// *A skipped
//-------------------------------------------------------------
/*
*B. printCool
Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool
*/
function printCool(name) {
  console.log(`${name} is cool`);
}
console.log(printCool("Captain Reynolds"));
//-------------------------------------------------------------
/*
*C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
*/
function calculateCube(cube) {
  return cube ** 3;
}
console.log(calculateCube(5));
//--------------------------------------------------------------
/*
*D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
*/
function isVowel(letter) {
  letter = letter.toLowerCase();
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}
console.log(isVowel("F"));
//--------------------------------------------------------------
/*
*E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getTwoLengths(strLength1, strLength2) {
    return [strLength1.length, strLength2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
//--------------------------------------------------------------
/*
*F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
 */
function getMultipleLengths(string) {
  let lenghts =[];
    for (let i = 0; i< string.length; i++) {
      lenghts.push(string[i].length)
    }
    return lenghts;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//-------------------------------------------------------------
/*
*G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
 */
function maxOfThree(num1,num2,num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }else if (num2 >= num1 && num2 >= num3) {
    return num2;
  }else{
    return num3;
  }
}
console.log(maxOfThree(6, 9, 1));
//-------------------------------------------------------------
/*
*H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
*/
function printLongestWord(string2) {
  let longestString = '';
  for (let i = 0; i < string2.length; i++) {
    let tempLength = string2[i];
    if (tempLength.length > longestString.length) {
      longestString = tempLength;
    }
  }
  return longestString;
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);