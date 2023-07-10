/*
*A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
 */
const user = {
  name: 'Brook',
  email: "brooks@gmail.com",
  age: 29,
  purchased: [],
};
//--------------------------------------------------------------
/*
*B. Update the user
Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
*/
user.email = "brookside@gmail.com";
user.age++;
//--------------------------------------------------------------
/*
*C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
*/
user.location = "New York;";
//-------------------------------------------------------------
/*
*D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.
*/
//#1
user.purchased.push('carbonhydrated');
console.log(user.purchased);
//#2
user.purchased.push("peace of mind");
console.log(user.purchased);
//#3
user.purchased.push("Merino jodhpurs");
console.log(user.purchased);
//#4
console.log(user.purchased[2]);
//--------------------------------------------------------------
/*
*E. Object-within-object
1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4. CHANGE the friend's age to 55
5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
7. Console.log just "A latte" from the friend's purchased array.
*/
//#1
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: 'US',
  purchased: []
};
//#2
console.log(user.friend.name);
//#3
console.log(user.friend.location);
//#4 
user.friend.age = 55;
console.log(user.friend.age);
//#5
user.friend.purchased.push('The One Ring');
console.log(user.friend.purchased);
//#6
user.friend.purchased.push('A latte');
console.log(user.friend.purchased);
//#7
console.log(user.friend.purchased[1]);
//------------------------------------------------------------
/*
*F. Loops
1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
*/
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
  
}
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
  
}
//--------------------------------------------------------------
/*
*G. Functions can operate on objects
1. Write a single function updateUser that takes no parameters. When the function is run, it should:
2. it should increment the user's age by 1
3. make the user's name uppercase

The function does not need a return statement, it will merely modify the user object.

1. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
*/
function updateUser() {
  user.age++;
  user.name.toUpperCase();
}
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}
updateUser();
console.log(user);