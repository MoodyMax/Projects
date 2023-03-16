function filterOutOddss() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//Refactor

const filterOutOdds = (...arg) => arg.filter((n) => n % 2 === 0);

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.Make sure to do this using the rest and spread operator.
//My original
const findMin = (...nums) =>
  nums.reduce((min, currVal) => (currVal < min ? currVal : min));

// Better
const findMin2 = (...args) => Math.min(...args);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...rest) => [
  ...arr,
  ...rest.map((v) => v * 2),
];

// remove a random element in the items array
// and return a new array without that item.

const removeRandom = (args) => {
  let idx = Math.floor(Math.random() * args.length);
  return [...args.slice(0, idx), ...args.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addkeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
