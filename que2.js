const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24]; // Corrected invalid value and added one more element

// 1. Sort the array
ages.sort((a, b) => a - b);  // Ascending order (smallest to largest)

// 2. Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// 3. Find median age
const medianIndex = Math.floor(ages.length / 2);
const median = ages.length % 2 === 0
  ? (ages[medianIndex] + ages[medianIndex - 1]) / 2  // Two middle items (average)
  : ages[medianIndex];                                // One middle item

// 4. Calculate average age
const totalAge = ages.reduce((acc, age) => acc + age, 0);
const averageAge = totalAge / ages.length;

// 5. Find range (max - min)
const range = maxAge - minAge;

// 6. Compare (min - average) and (max - average) using absolute values
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", median);
console.log("Average age:", averageAge.toFixed(2)); // Format to two decimal places
console.log("Range:", range);
console.log("Min difference from average:", minDiff);
console.log("Max difference from average:", maxDiff);
