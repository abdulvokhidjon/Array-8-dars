// Array
// N{1}

// function getLevel2(n) {
//   const result = [];
//   let num = 2;

//   for (let i = 0; i < n; i++) {
//     result.push(num);
//     num *= 2;
//   }

//   return result;
// }

// const n = 5;
// const levels = getLevel2(n);
// console.log(levels);

// N{2}

// function generateArray(n, A, B) {
//   const result = [A, B];

//   for (let i = 2; i < n; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += result[j];
//     }

//     result.push(sum);
//   }

//   return result;
// }

// const n = 5;
// const A = 2;
// const B = 3;
// const output = generateArray(n, A, B);
// console.log(output);

// N{3}

// function reverseArray() {
//   const input = prompt(
//     "Marhamat qilib Massiv elementlarini vergul bilan ajratilgan holda kiriting (M:, 1, 2, 3, 4)"
//   );

//   const arr = input.split(",").map(Number);

//   arr.reverse();

//   console.log("Reversed array:", arr);
// }

// reverseArray();

// N{4}

// const arr = [4, 5, 7, 8, 6, 9];

// const odds = arr.filter((index) => index % 2 !== 0);

// const result = odds.sort((a, b) => a - b);
// console.log(`Natija: ${result.join(" ")}, Toq sonlar soni = ${result.length}`);

// N{5}

// function extractAndRearrange(arr) {
//   const even = [];
//   const odd = [];

//   for (const num of arr) {
//     if (num % 2 === 0) {
//       even.push(num);
//     } else {
//       odd.push(num);
//     }
//   }

//   odd.reverse();

//   const result = even.concat(odd);

//   return result;
// }

// const arr = [4, 5, 7, 8, 6, 9];
// const rearranged = extractAndRearrange(arr);
// console.log(...rearranged);

// N{6}

// function extractEvenIndexedElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// const arr = [10, 15, 20, 25, 30, 35];
// const evenIndexed = extractEvenIndexedElements(arr);
// console.log(evenIndexed);

// // N{7}

// function extractOddReverseIndexedElements(arr) {
//   const result = [];

//   for (let i = arr.length - 2; i >= 0; i -= 2) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// const arr = [10, 15, 20, 25, 30, 35];
// const oddReverseIndexed = extractOddReverseIndexedElements(arr);
// console.log(oddReverseIndexed);

// N{8}

// function extractEvenAndOddIndexedElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }

//   for (let i = 1; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// const arr = [10, 15, 20, 25, 30, 35];
// const extractedElements = extractEvenAndOddIndexedElements(arr);
// console.log(extractedElements);

// N{9}

// function extractAndRearrangeOddEven(arr) {
//   const odd = [];
//   const even = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }

//   odd.sort((a, b) => a - b);

//   even.reverse();

//   const result = odd.concat(even);

//   return result;
// }

// const arr = [10, 15, 20, 25, 30, 35, 40, 45]; // Example even-length array
// const rearranged = extractAndRearrangeOddEven(arr);
// console.log(rearranged);

// N{10}

// function rearrangeArray(arr) {
//   const result = [];
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     if (left === right) {
//       result.push(arr[left]);
//     } else {
//       result.push(arr[left], arr[right]);
//     }
//     left++;
//     right--;
//   }

//   return result;
// }

// const arr = [10, 15, 20, 25, 30, 35];
// const rearranged = rearrangeArray(arr);
// console.log(rearranged);

// N{11}

// function rangeOutSum(arr, K, L) {
//   let sum = 0;

//   for (let i = 0; i < K; i++) {
//     sum += arr[i];
//   }

//   for (let i = L + 1; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const K = 2;
// const L = 5;
// const sum = rangeOutSum(arr, K, L);
// console.log(sum);

// N{12}

// function separateTruthyFalsy(arr) {
//   const truthy = [];
//   const falsy = [];

//   for (const value of arr) {
//     if (value) {
//       truthy.push(value);
//     } else {
//       falsy.push(value);
//     }
//   }

//   return { truthy, falsy };
// }

// const arr = [10, false, "", "Abdulaziz", null];
// const { truthy, falsy } = separateTruthyFalsy(arr);

// console.log("Truthy:", truthy);
// console.log("False:", falsy);

// N{13}

// function getOddMin(arr) {
//   let oddMin = Infinity;
//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] < oddMin) {
//       oddMin = arr[i];
//     }
//   }

//   return oddMin;
// }

// const arr = [10, 5, 20, 15, 30, 25];
// const smallestOddIndexed = getOddMin(arr);
// console.log(smallestOddIndexed);

// N{14}

// function getEvenMax(arr) {
//   let evenMax = -Infinity;
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] > evenMax) {
//       evenMax = arr[i];
//     }
//   }

//   return evenMax;
// }

// const arr = [10, 5, 20, 15, 30, 25];
// const largestEvenIndexed = getEvenMax(arr);
// console.log(largestEvenIndexed);

// N{15}

// function findLastLocalMax(arr) {
//   for (let i = 1; i < arr.length - 1; i++) {
//     const left = arr[i - 1];
//     const current = arr[i];
//     const right = arr[i + 1];

//     if (current > left + right) {
//       return i;
//     }
//   }

//   return -1;
// }

// const arr = [1, 5, 3, 7, 2, 4];
// const lastLocalMaxIndex = findLastLocalMax(arr);
// console.log(lastLocalMaxIndex);
