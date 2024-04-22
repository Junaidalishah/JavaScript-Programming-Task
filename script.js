// 1 Palindrome Check:

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const len = cleanStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// 2 Minimum and Maximum Numbers:

function findMinMax(numbers) {
  if (numbers.length === 0) {
    return { min: null, max: null };
  }

  let min = numbers[0];
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } else if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return { min, max };
}

// Test cases
console.log(findMinMax([3, 1, 7, 5, 9])); // { min: 1, max: 9 }
console.log(findMinMax([-10, 0, 56, -3, 28])); // { min: -10, max: 56 }
console.log(findMinMax([])); // { min: null, max: null }

// 3Missing Number Identification:

function findMissingNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      return sortedArr[i] + 1;
    }
  }
  return null; // If no missing number found
}

// Test case
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 17
console.log(findMissingNumber([1, 2, 3, 4, 5, 7])); // 6
console.log(findMissingNumber([8, 9, 10])); // null (no missing number)
