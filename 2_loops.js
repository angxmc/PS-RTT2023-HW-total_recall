/*
Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)

*A. The basics
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
 */
// #1
for (let countdown = 0; countdown <= 10; countdown++) {
  console.log(countdown);
}
// #2
for (let tenFourHundred = 10; tenFourHundred <= 400; tenFourHundred++) {
  console.log(tenFourHundred);
}
// #3
for (let thirdNum = 12; thirdNum <= 4000; thirdNum += 3) {
  console.log(thirdNum);
}
//-----------------------------------------------------------------------------------------
/*
*B. Get even
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even  number"
 */
for (let list = 0; list <= 100; list++) {
  if (list % 2 === 0) {
    console.log(`${list} <-- is an even number`);
  } else {
    console.log(list);
  }
}
//-----------------------------------------------------------------------------------------
/*
* C. Give me Five
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
3. For numbers divisible by both three and five, be sure your code prints both messages
 */
for (let c = 0; c <= 100; c++) {
  if (c % 3 === 0 && c % 5 === 0) {
    console.log(`${c} I found a number. High Five & Three is a crowd!`);
  } else if (c % 5 === 0) {
    console.log(`${c} I found a number, High five!`);
  } else if (c % 3 === 0) {
    console.log(`${c} I found a number. Three is a crowd`);
  }
}
//-----------------------------------------------------------------------------------------
/*
*D. Savings Account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
 */
let bank_account = 0;

for (let amount = 1; amount <= 10; amount++) {
  bank_account += amount;
}
console.log(bank_account);

bank_account = 0;
for (let double = 0; double <= 100; double++) {
  bank_account += double * 2;
}
console.log(bank_account);
