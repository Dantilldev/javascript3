// Array filtering allows you to create a new array with elements that pass a specific condition.

const ages = [12, 18, 25, 8, 30, 16];

// Task 1: Use the .filter() method to create a new array called `adultAges` which only
// includes ages that are 18 or older. Use console.log to print the `adultAges` array.
const adultAges = ages.filter((age) => {
  return age >= 18;
}); // går att köra utan måsvingar

console.log(adultAges);
// Task 2: Write a function called `getAdultAges` that takes an array of ages as an argument
// and returns a new array with only the adult ages.
function getAdultAges(ages) {
  return ages.filter((age) => age >= 18);
}

// Task 3: Use the `getAdultAges` function to create a new array called `adultAges`.
const adultAges1 = getAdultAges(ages);
console.log('Task 5: ', adultAges1);
