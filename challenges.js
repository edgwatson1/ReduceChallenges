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

// ####################################################
// # Math operations with Reduce on Arrays of Objects #
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
