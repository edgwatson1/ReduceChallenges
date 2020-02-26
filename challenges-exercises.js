// How do I run it? Run with Node - install Node (https://nodejs.org/en/download/) and execute the file in the terminal i.e. 'node challenges.js'

// These challenges are based on this blogpost by James Sinclair: https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/ and are linked to from my own personal site https://www.edwardwatson.com/posts/reduce.html which gives more context on the exercises.

// Test output below
// console.log("Hello, world!");

// ##############################
// # Math operations with Reduce #
// ##############################

// 1. What is the sum of all numbers in the arrayOfNumbers array? Write the function sumArrayValues and uncomment the console.log to test it. I have included this function as an example so you can see how to structure this! So just make sure it runs on your machine and gives the answer we expect (55).

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrayValues(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(arrayOfNumbers.reduce(sumArrayValues, 0));

// 2. What is the product of all numbers in the arrayOfNumbers array? Write the function multiplyArrayValues and uncomment the console.log to test it.

function multiplyArrayValues(accumulator,currentValue){
  // Write your code here
}

// console.log(arrayOfNumbers.reduce(multiplyArrayValues, 1));

// 3. What is the average of all numbers in the arrayOfNumbers array? Write the function findAverageOfValues and uncomment the console.log to test it. Hint: If you haven't used it before, check out the optional index argument of .reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce It is useful for computing the average.

function findAverageofValues(accumulator, currentValue, index) {
  // Write your code here
}

// console.log(
//   arrayOfNumbers.reduce(findAverageofValues, { n: 0, sum: 0, average: 0 })
// );

// 4. We can perform multiple operations at a time with reduce, which allows us to write powerful functions. On the same array, write a reducer function sumMultiplyAndAverageArrayValues that will find the sum, product and average of the numbers with only one traversal of the array. Uncomment the console.log to test it.

console.log(
  arrayOfNumbers.reduce(sumMultiplyAndAverageArrayValues, {
    sum: 0,
    product: 1,
    average: 0
  })
);

function sumMultiplyAndAverageArrayValues(accumulator, currentValue, index) {
// Write your code here
  };
}

//  5. Another powerful feature of reduce is that the currentValue doesn't need to be the same type as the accumulator.

// For example, we can use reduce on an array of numbers and input a string. In the next exercise, return a string which shows the build up of the sum of our array values. Each sum should be on a new line, with the last line being the total. See how the reducer function printNumbersAsString works and then console.log to test it. We will use this format to do the next exercise.

function printNumbersAsString(accumulator, currentValue) {
  return `${accumulator + currentValue} \n`;
}

// console.log(arrayOfNumbers.reduce(printNumbersAsString, 0));

// 6. Now, write a reducer function fizzBuzzReducer that will give a fizzbuzz solution as a string for the given array of numbers (each number, or 'fizz' or 'buzz' will need to be on a new line). Uncomment the console.log to test it.

// FYI Fizzbuzz is an arithmetic game used to teach children division. As you count up, if a number is divisible by three, you say fizz. If divisible by five, you say buzz. If divisible by three and five, you say fizzbuzz. If divisable by neither three or five, you just say the number. https://en.wikipedia.org/wiki/Fizz_buzz

let givenArrayOfNumbersForFizzBuzz = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  30,
  60,
  90,
  101,
  102,
  103,
  104,
  105,
  300
];

function fizzBuzzReducer(accumulator, currentValue) {
//  Write your code here
}

// console.log(givenArrayOfNumbersForFizzBuzz.reduce(fizzBuzzReducer, ""));

// ####################################################
// # Manipulating Arrays of Objects with Reduce #
// ####################################################

// 1. Reduce can also be used to perform  operations on arrays of objects. Imagine you are working on a social network and you want to perform quick analysis of the users in the array below arrayOfAllUsers. Write a reducer function sumAllFollowers which outputs the sum of all followers. Uncomment the console.log to test it.

let arrayOfAllUsers = [
  { userid: 23, followers: 50, country: "UK" },
  { userid: 24, followers: 23, country: "Spain" },
  { userid: 27, followers: 45, country: "France" },
  { userid: 40, followers: 45, country: "Germany" },
  { userid: 43, followers: 65, country: "UK" },
  { userid: 46, followers: 223, country: "Portugal" },
  { userid: 48, followers: 2343, country: "Portugal" },
  { userid: 65, followers: 3430, country: "Portugal" },
  { userid: 78, followers: 34, country: "UK" },
  { userid: 89, followers: 3434, country: "UK" },
  { userid: 119, followers: 6544, country: "UK" },
  { userid: 123, followers: 500, country: "Spain" },
  { userid: 124, followers: 199, country: "France" },
  { userid: 139, followers: 344, country: "Germany" },
  { userid: 142, followers: 233, country: "UK" },
  { userid: 146, followers: 232, country: "Portugal" },
  { userid: 147, followers: 223, country: "Portugal" },
  { userid: 167, followers: 433, country: "Portugal" },
  { userid: 178, followers: 543, country: "UK" },
  { userid: 189, followers: 1566, country: "UK" }
];

// console.log(arrayOfAllUsers.reduce(sumAllFollowers, 0));

function sumAllFollowers(accumulator, currentValue) {
  // Write your code here
}

// 2. You can also filter using Reduce. We want to find the sum of all user's followers from the UK. Write a reducer function sumAllFollowersFromTheUK which does this and uncomment the console.log to test it.

function sumAllFollowersFromTheUK(accumulator, currentValue) {
  // Write your code here
}

// console.log(arrayOfAllUsers.reduce(sumAllFollowersFromTheUK, 0));

// 3. In a similar vein, now write the reducer function averageFollowers which finds the average of all followers. In the console.log we pass in an object as the initial value but you can present the answer any way you like - so long as it includes the average. Uncomment the console.log to test it.

function averageFollowers(accumulator, currentValue, index) {
  // Write your code here
}

// console.log(arrayOfAllUsers.reduce(averageFollowers, 0);

// 4. Write a function averageFollowersFromPortugal which outputs the average followers for only Portuguese users. Uncomment the console.log to test it.

console.log(
  arrayOfAllUsers.reduce(averageFollowersFromPortugal, {
    total: 0,
    average: 0
  })
);

function averageFollowersFromPortugal(accumulator, currentValue, index) {
  // Write your code here
}

// 5. As we reduced an array to a string in our first section, reduce can also be used to map objects into arrays. Write a function selectUserIDsOutputAsArray which select only userids and outputs them as an array e.g. [234,239,454]. Uncomment the console.log to test.

// console.log(arrayOfAllUsers.reduce(selectUserIDsOutputAsArray, []));

function selectUserIDsOutputAsArray(accumulator, currentValue) {
  // Write your code here
}

// 6. Now, we want to transform the array we just made and reduce it to a new array of objects, in which each element has information on the userid and the source of the userid e.g. [{source: "Social Network users", userid: 23}, {source: "Social Network users", userid: 24},{source: "Social Network users", userid: 26}].  Write a function transformArrayOfUserIdsToObject to do this. Uncomment the console.log to test.

let arrayOfUserIds = [
  23,
  24,
  27,
  40,
  43,
  46,
  48,
  65,
  78,
  89,
  119,
  123,
  124,
  139,
  142,
  146,
  147,
  167,
  178,
  189
];

// console.log(arrayOfUserIds.reduce(transformArrayOfUserIdsToObject, []));

function transformArrayOfUserIdsToObject(accumulator, currentValue) {
//  Write your code here
}

// 7. We want to return all user ids from the following in one, flat array. All values should be the same level e.g. [3, 6, 9, 11, 923]. Write the reducer function flattenUserIDsIntoOneArray to do this.

let allUsersPerCountry = [
  {
    country: "UK",
    users: [
      { userid: 3, followers: 9050 },
      { userid: 6, followers: 29 },
      { userid: 9, followers: 120 },
      { userid: 11, followers: 700 }
    ]
  },
  {
    country: "Portugal",
    users: [
      { userid: 923, followers: 1050 },
      { userid: 924, followers: 23 },
      { userid: 927, followers: 47 },
      { userid: 940, followers: 5 }
    ]
  },
  {
    country: "Spain",
    users: [
      { userid: 232, followers: 520 },
      { userid: 264, followers: 232 },
      { userid: 297, followers: 435 },
      { userid: 240, followers: 322 }
    ]
  },
  {
    country: "Germany",
    users: [
      { userid: 1043, followers: 90 },
      { userid: 1044, followers: 93 },
      { userid: 1047, followers: 95 },
      { userid: 1040, followers: 95 }
    ]
  }
];

// console.log(allUsersPerCountry.reduce(flattenUserIDsIntoOneArray, []));

function flattenUserIDsIntoOneArray(accumulator, currentValue) {
//  Write your code here
}

// PS. You can also use flatMap for this - check out documentation here or see this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap. 

// let flattenedUsersId = allUsersPerCountry.flatMap(country =>
//   country.users.map(user => {
//     return { id: user.userid };
//   })
// );

// 8. Reduce can be used to manipulate long strings read from lines of files to neat arrays. Write the function splitLinesReducer which turns the following five strings into an array of names.

const fileLines = [
  "Roger Schmill,Dallas Mcfog,Thomas Brown",
  "Jill Henderson,Priti Patel,Reginald Dwight",
  "Bilbo Baggins,Angela McDee,Akon",
  "Dr. Parhar,Lucius Hill,Matt Jackson",
  "Ellie Smalls,Tom Saxey"
];

function splitLinesReducer(accumulator, currentValue) {
//  Write your code here!
}

// console.log(fileLines.reduce(splitLinesReducer, []));

// ####################################
// # Well done for making it this far! #
// ####################################

// There're all the challenges I have. Please feel free to open a pull request to add more, especially with real use cases you've seen in production code - the idea is to have a comprehensive set of challenges to develop the most practical understanding of reduce possible. 