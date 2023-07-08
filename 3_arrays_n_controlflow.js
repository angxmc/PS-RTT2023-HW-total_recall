/*
*A. Talk about it:
#1. What are the things in an array called?
    items
#2. Do Arrays guarantee those things will be in order?
    yes
#3. What real-life thing could you model with an array?
    lining up for something. like groceries, when checking out
*/
//-----------------------------------------------------------------------------------------
/*
*B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
*/
let quotes = [
  "I know that I am intelligent because I know that I know nothing",
  "The unexamined life is not worth living.",
  "I cannot teach anybody anything. I can only make them think",
];
//-----------------------------------------------------------------------------------------
/* 
*C. Accessing Elements
Given the following array const randomThings = [1, 10, "Hello", true]
1. How do you access the 1st element in the array?
2. Change the value of "Hello"to "World"
3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/
const randomThings = [1, 10, "Hello", true];
//#1
console.log(randomThings[0]);
//#2
randomThings[2] = "World";
console.log(randomThings);
//-----------------------------------------------------------------------------------------
/*
*D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
1. What would you write to access the 3rd element of the array?
2. Change the value of "Github" to "Octocat"
3. Add a new element, "Cloud City" to the array
*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//#1
console.log(ourClass[2]);
//#2
ourClass[4] = "Octocat";
console.log(ourClass);
//#3
ourClass.push("Cloud City");
console.log(ourClass);
//-----------------------------------------------------------------------------------------
/*
*E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]
1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
2. Remove the 5 from the beginning of the array.
3. Add the string "Bob Marley"to the beginning of the array.
4. Remove the string of your choice from the end of the array.
#5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
    yes, the array is mutated because the order has changed without creating a new array. Yes, it returned the array in reversed order. It has changed the original array.
*/
const myArray = [5, 10, 500, 20];
//#1
myArray.push("Aegon", "pocky");
console.log(myArray);
//#2
myArray.shift();
console.log(myArray);
//#3
myArray.unshift("Bob Marley");
console.log(myArray);
//#4
myArray.pop();
console.log(myArray);
//#5
myArray.reverse();
console.log(myArray);
//-----------------------------------------------------------------------------------------
/*
*F. Biggie Smalls
Create a variable that contains an integer.
Write an if ... elsestatement that:
1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.
*/
let int = 100;
if (int < 100) {
  console.log("little number");
} else {
  console.log("big number");
}
//-----------------------------------------------------------------------------------------
/*
*G. Monkey in the Middle
Write an if ... else if ... elsestatement:
1. console.log()little numberif the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".
*/
let num = 7;
if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}
//-----------------------------------------------------------------------------------------
/*
*H. What's in Your Closet?
1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
5. In the same way, access one item from Thom's pants array.
6. Access one item from Thom's accessories array.
7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
 */
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
//#1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//#2
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
//#3
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
//#4
console.log(thomsCloset[0][0]);
//#5
console.log(thomsCloset[1][1]);
//#6
console.log(thomsCloset[2][1]);
//#7
console.log(
  "Thom is looking fierce in a " +
    thomsCloset[0][0] +
    ", " +
    thomsCloset[1][1] +
    " and " +
    thomsCloset[2][1] +
    "!"
);
//#8
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);
