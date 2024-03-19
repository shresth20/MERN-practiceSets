// Problem: Finding Missing Number
// You are given an array of integers containing numbers in the range from 1 to N, where N is the length of the array. However, one integer from the range is missing. Write a function to find and return the missing number.

let findMissingNumber = (arr) => {
  // let larr = arr.sort((a,b)=>a-b)
  // large = larr[larr.length-1]

  for (let i = 1; i < 8; i++) {
    if (arr.includes(i) === false) {
        console.log(`MissingNumber is ${arr[i]}`);
  }
};

findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Should return 6
findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9, 10]); // Should return 6
findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10]); // Should return 7

arr.reduce((n, el) => {
  large = n < el ? el : n;
  return large;
});

for (let i = 1; i < large; i++) {
  if (arr[i - 1] !== i) {
    console.log(`MissingNumber is ${i}`);
  }
  console.log(arr[i - 1], i);
}
