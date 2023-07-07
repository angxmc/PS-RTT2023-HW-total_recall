/*
*A. Q+A
#1. How do we assign a value to variable
    first we delcare a scope for the vairable and assign a name, then we ust hte equasl perator to give an value to the declared name of the variable
#2. How do we change the value of a variable?
    we just type the already decalred variable's name and set it to the new value we want to give.
#3. How do we assign an existing variable to a new variable?
    Frist we decalre the type of variable we want this new variable to be let/const, then we set it equal to the already declared variable's name you want to change it to. 
#4. Remind me, what are declare, assign, and define?
    we decalre a variable when we first introduce a new variable, then we assign a valued to the variable. we define the type and scope of the variable.
#5. what is pseudocoding and why should you do it?
    pseudocoding is wehre you list out he logical steps to execute the codes. this can give you a clear step and a mapping to how to tell the computer to do it. 
#6. what percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
    i would 30-70%. Having a clear structure in head is like having a pseudocode in head, but just thinking about it will get you no where vs actually doi it and type it out. 
 */
// ----------------------------------------------------------------------------------------
/*
*B. Strings
1. Create a variable called firstVariable
2. Assign it the value of the string "Hello World"
3. Change the value of this variable to some number
4. Store the value of firstVariablein a new variable called secondVariable
5. Change the value of secondVariableto any string.
6. What is the value of firstVariable?
7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
 */
let firstVariable = "Hello World";
firstVariable = 7;
let secondVariable = firstVariable;
secondVariable = "Blue Bottle";
let yourName = "Angelina";
console.log(`Hello, my name is ${yourName}`);
//-----------------------------------------------------------------------------------------
/*
*C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
 */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//-----------------------------------------------------------------------------------------
/*
*D. The farm
1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
4. Commit
 */
let animal = "cat";
if (animal === "cow") {
  console.log("moooo");
} else {
  console.log("Hey! You're not a cow.");
}

/*
*E. Driver's Ed
1. Make a variable that holds a person's age; be semantic
2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
 */
let personAge = 7;
if (personAge >= 16) {
  console.log("Here are teh keys!");
} else {
  console.log("Sorry, you're too young");
}
//-----------------------------------------------------------------------------------------