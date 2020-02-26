// How do I run it? Run with Node - install Node and execute the file in the terminal i.e. 'node challenges.js'

// These challenges are loosely based on this blogpost by James Sinclair: https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/

// Test output below
// console.log("Hello, world!");

// ##############################
// # Math operations with Reduce #
// ##############################

// 1. What is the sum of all numbers in the arrayOfNumbers array? Write the function sumArrayValues and uncomment the console.log to test it.

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arrayOfNumbers.reduce(sumArrayValues, 0));

// 2. What is the product of all numbers in the arrayOfNumbers array? Write the function multiplyArrayValues and uncomment the console.log to test it.

// console.log(arrayOfNumbers.reduce(multiplyArrayValues, 1));

// 3. What is the average of all numbers in the arrayOfNumbers array? Write the function findAverageOfValues and uncomment the console.log to test it.s

function findAverageofValues(accumulator, currentValue) {
  console.log("redcuer", accumulator, currentValue);
  return {
    n: accumulator.n + 1,
    sum: accumulator.sum + currentValue,
    average: (accumulator.sum + currentValue) / (accumulator.n + 1)
  };
}

// console.log(
//   arrayOfNumbers.reduce(findAverageofValues, { n: 0, sum: 0, average: 0 })
// );

// 4. We can perform multiple operations at a time with reduce, which allows us to write powerful functions. On the same array, write a reducer function sumMultiplyAndAverageArrayValues that will find the sum, product and average of the numbers with only one traversal of the array. Uncomment the console.log to test it.

// console.log(
//   arrayOfNumbers.reduce(sumMultiplyAndAverageArrayValues, {
//     sum: 0,
//     product: 1,
//     average: 0,
//   })
// );

function sumMultiplyAndAverageArrayValues(accumulator, currentValue, index) {
  console.log(index);
  return {
    sum: accumulator.sum + currentValue,
    product: accumulator.product * currentValue,
    average: (accumulator.sum + currentValue) / (index + 1)
  };
}

//  5. Another powerful feature of reduce is that the currentValue doesn't need to be the same type as the accumulator. For example, we can use reduce on an array of numbers and input a string. In the next exercise, return a string which shows the build up of the sum of our array values. Each sum should be on a new line, with the last line being the total. Write the reducer function printNumbersAsString and uncomment the console.log to test it.

// console.log(arrayOfNumbers.reduce(printNumbersAsString, 0));

function printNumbersAsString(accumulator, currentValue) {
  return `${accumulator + currentValue} \n`;
}

// 6. Now, write a reducer function fizzBuzzReducer that will give a fizzbuzz solution as a string for the given array of numbers. Uncomment the console.log to test it.

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

// console.log(givenArrayOfNumbersForFizzBuzz.reduce(fizzBuzzReducer, ""));

function fizzBuzzReducer(accumulator, currentValue) {
  if (currentValue % 15 === 0) {
    return `${accumulator} FizzBuzz \n`;
  } else if (currentValue % 3 === 0) {
    return `${accumulator} Fizz \n`;
  } else if (currentValue % 5 === 0) {
    return `${accumulator} Buzz \n`;
  } else {
    return `${accumulator} ${currentValue} \n`;
  }
}

function fizzBuzz(numberToCountUpTo) {
  let emptyArray = [];
  for (let i = 0; i <= numberToCountUpTo; i++) {
    emptyArray.push(i);
  }
  return emptyArray.reduce(fizzBuzzReducer, "");
}

// console.log(fizzBuzz(200));

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
  return accumulator + currentValue.followers;
}

// 2. You can also filter using Reduce. We want to find the sum of all user's followers from the UK. Write a reducer function sumAllFollowersFromTheUK which does this and uncomment the console.log to test it.

// console.log(arrayOfAllUsers.reduce(sumAllFollowersFromTheUK, 0));

function sumAllFollowersFromTheUK(accumulator, currentValue) {
  return (
    (currentValue.country === "UK" && accumulator + currentValue.followers) ||
    accumulator
  );
}

// 3. In a similar vein, now write the reducer function averageFollowers which finds the average of all followers. In the console.log we pass in an object as the initial value but you can present the answer any way you like - so long as it includes the average. Uncomment the console.log to test it.

// console.log(arrayOfAllUsers.reduce(sumFollowers, 0) / arrayOfAllUsers.length);

function sumFollowers(accumulator, currentValue) {
  return accumulator + currentValue.followers;
}

// 4. Write a function averageFollowersFromPortugal which outputs the average followers for only Portuguese users. Uncomment the console.log to test it.

// console.log(
//   arrayOfAllUsers.reduce(averageFollowersFromPortugal, {
//     total: 0,
//     average: 0
//   })
// );

function averageFollowersFromPortugal(accumulator, currentValue, index) {
  return currentValue.country === "Portugal"
    ? {
        total: accumulator.total + currentValue.followers,
        average: (accumulator.total + currentValue.followers) / (index + 1)
      }
    : accumulator;
}

// 5. As we reduced an array to a string in our first section, reduce can also be used to map objects into arrays. Write a function selectUserIDsOutputAsArray which select only userids and outputs them as an array e.g. [234,239,454]. Uncomment the console.log to test.

// console.log(arrayOfAllUsers.reduce(selectUserIDsOutputAsArray, []));

function selectUserIDsOutputAsArray(accumulator, currentValue) {
  return [...accumulator, currentValue.userid];
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
  accumulator.push({
    source: "Social Network users",
    userid: currentValue
  });
  return accumulator;
}

// 7. FLAT MAP / we want to return all user ids from the following in one array. Write the reducer function flattenUserIDsIntoOneArray to do this. [122,321,122]

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
  currentValue.users.forEach(user => accumulator.push(user.userid));
  return accumulator;
}

//  testflatmap

let flattenedUsersId = allUsersPerCountry.flatMap(country =>
  country.users.map(user => {
    return { id: user.userid };
  })
);
console.log("flat", flattenedUsersId);

// Turn small array into larger array

const fileLines = [
  "Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton",
  "Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown",
  "Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester",
  "Inspector Gregory,Inspector Tobias Gregson,Inspector Hill",
  "Inspector Stanley Hopkins,Inspector Athelney Jones"
];

// console.log(fileLines.reduce(splitLinesReducer, []));

function splitLinesReducer(accumulator, currentValue) {
  currentValue.split(",").forEach(name => accumulator.push(name));
  return accumulator;
}
