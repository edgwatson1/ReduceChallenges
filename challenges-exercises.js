// How do I run it? Run with Node - install Node and execute the file in the terminal i.e. ```node challenges.js```

// These challenges are loosely based on this blogpost by James Sinclair: https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/

// Test output below
// console.log("Hello, world!");

// ##############################
// # Math operations with Reduce #
// ##############################

// # What is the sum of all numbers in the arrayOfNumbers array?

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrayValues(accumulator, currentValue) {
  return accumulator + currentValue;
}

// console.log(arrayOfNumbers.reduce(sumArrayValues, 0));

// What is the product of all numbers in the arrayOfNumbers array?

function multiplyArrayValues(accumulator, currentValue) {
  return accumulator * currentValue;
}

// console.log(arrayOfNumbers.reduce(multiplyArrayValues, 1));

// What is the average of all numbers in the arrayOfNumbers array?

function findAverageofValues(accumulator, currentValue) {
  return {
    n: accumulator.n + 1,
    total: accumulator.total + currentValue,
    average: (accumulator.total + currentValue) / (accumulator.n + 1)
  };
}

// console.log(
//   arrayOfNumbers.reduce(findAverageofValues, { n: 0, total: 0, average: 0 })
// );

// We can perform multiple operations at a time with reduce, which allows us to write powerful functions. On the same array, find the sum, product and average of the numbers with only one traversal of the array.

// console.log(
//   arrayOfNumbers.reduce(sumMultiplyAndAverageArrayValues, {
//     sum: 0,
//     product: 1,
//     average: 0,
//     n: 0
//   })
// );

function sumMultiplyAndAverageArrayValues(accumulator, currentValue) {
  return {
    sum: accumulator.sum + currentValue,
    product: accumulator.product * currentValue,
    average: (accumulator.sum + currentValue) / (accumulator.n + 1),
    n: accumulator.n + 1
  };
}

//  Another powerful feature of reduce is that the currentValue doesn't need to be the same type as the accumulator. For example, we can use reduce on an array of numbers and input a string. In the next exercise, return a string which shows the build up of the sum of our array values. Each sum should be on a new line, with the last line being the total.

// console.log(arrayOfNumbers.reduce(printNumbersAsString, 0));

function printNumbersAsString(accumulator, currentValue) {
  return `${accumulator + currentValue} \n`;
}

// Now, create a fizzbuzz solution for the given array of numbers. Fizzbuzz is an arithmetic game used to teach children division. As you count up, if a number is divisible by three, you say fizz. If divisible by five, you say buzz. If divisible by three and five, you say fizzbuzz. If divisable by neither three or five, you just say the number.

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

console.log(givenArrayOfNumbersForFizzBuzz.reduce(fizzBuzzReducer, ""));

function fizzBuzzReducer(accumulator, currentValue) {
  if (currentValue % 15 === 0) {
    return `${accumulator} ${currentValue}: FizzBuzz \n`;
  }
  if (currentValue % 5 === 0) {
    return `${accumulator} ${currentValue}: Buzz \n`;
  }
  if (currentValue % 3 === 0) {
    return `${accumulator} ${currentValue}: Fizz \n`;
  } else {
    return `${accumulator} ${currentValue} \n`;
  }
}

// ####################################################
// # Manipulating Arrays of Objects with Reduce #
// ####################################################

// Reduce can also be used to perform math operations on arrays of objects. Imagine you are working on a social network and you want to perform quick analysis the group of users below.

let arrayOfAllObjectsWithAllSocialNetworkUsers = [
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

// What is the sum of followers of all users?

// console.log(
//   arrayOfAllObjectsWithAllSocialNetworkUsers.reduce(sumAllFollowers, 0)
// );

function sumAllFollowers(accumulator, currentValue) {
  return accumulator + currentValue.followers;
}

// You can also filter using Reduce. What is the sum of all user's followers from the UK?

// console.log(
//   arrayOfAllObjectsWithAllSocialNetworkUsers.reduce(sumAllFollowersFromTheUK, 0)
// );

function sumAllFollowersFromTheUK(accumulator, currentValue) {
  return currentValue.country === "UK"
    ? accumulator + currentValue.followers
    : accumulator;
}

// What is the average number of followers?

// console.log(
//   arrayOfAllObjectsWithAllSocialNetworkUsers.reduce(averageFollowers, {
//     n: 0,
//     total: 0,
//     average: 0
//   })
// );

function averageFollowers(accumulator, currentValue) {
  return {
    n: accumulator.n + 1,
    total: accumulator.total + currentValue.followers,
    average: (accumulator.total + currentValue.followers) / (accumulator.n + 1)
  };
}

// What is the average number of followers of users from Portugal?

// console.log(
//   arrayOfAllObjectsWithAllSocialNetworkUsers.reduce(
//     averageFollowersFromPortugal,
//     {
//       n: 0,
//       total: 0,
//       average: 0
//     }
//   )
// );

function averageFollowersFromPortugal(accumulator, currentValue) {
  if (currentValue.country === "Portugal") {
    return {
      n: accumulator.n + 1,
      total: accumulator.total + currentValue.followers,
      average:
        (accumulator.total + currentValue.followers) / (accumulator.n + 1)
    };
  } else {
    return accumulator;
  }
}

// Reduce is useful to map values to new data structures. Select only userids and output them as an array e.g. [234,239,454].

// console.log(
//   arrayOfAllObjectsWithAllSocialNetworkUsers.reduce(
//     selectUserIDsOutputAsArray,
//     []
//   )
// );

function selectUserIDsOutputAsArray(accumulator, currentValue) {
  let output = accumulator;
  output.push(currentValue.userid);
  return output;
}

// Now, what if we want to convert the array we just made, and return it as an array of objects, in which each element has information on the userid and the source of the userid e.g. [{source: "Social Network users", userid: 23}, {source: "Social Network users", userid: 24},{source: "Social Network users", userid: 26}].  TODO

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
