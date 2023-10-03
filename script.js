
// 1.Palindrome Checker: Write a function that takes a string as input and returns true if it
// is a palindrome (reads the same backward as forward), and false otherwise. Ignore
// spaces, punctuation, and capitalization.

function isPalindrome(str) {
  str = str.replace(/\s+/g, "").toLowerCase();
  str = str.replace(/[^a-z0-9]/g, "");
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
const inputString = "A man, a plan, a canal, Panama";
const isInputPalindrome = isPalindrome(inputString);
console.log(isInputPalindrome);


//2.FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print
// &quot;Fizz&quot; instead of the number. For multiples of 5, print &quot;Buzz&quot; instead of the number. For
// numbers that are multiples of both 3 and 5, print &quot;FizzBuzz.&quot; 

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    if (output === '') {
      output = i;
    }

    console.log(output);
  }
}
fizzBuzz();

// 3.Factorial: Write a function that calculates the factorial of a given positive integer. The
// factorial of a non-negative integer n is the product of all positive integers less than or
// equal to n.
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
const n = 5; 
const result = factorial(n);
console.log(`The factorial of ${n} is ${result}`);

// 4.Prime Number: Write a function that determines if a given number is a prime number
// (greater than 1 and only divisible by 1 and itself).

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}
const num = 17; 
const isPrimeNumber = isPrime(num);

if (isPrimeNumber) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}

// 6.Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ...,
// n, write a function to find the missing number. The array is not sorted, and there is only
// one missing number.
function findMissingNumber(num) {
  const n = num.length;
  let missingNumber = n;
  for (let i = 0; i < n; i++) {
    missingNumber ^= i ^ num[i];
  }

  return missingNumber;
}
const numbers = [3, 0, 1, 4, 5, 2];
const missing = findMissingNumber(numbers);
console.log(`The missing number is: ${missing}`);

// 7.Reverse a String: Write a function that takes a string as input and returns the string
// reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}
const inputString1 = "Hello, World!";
const reversedString = reverseString(inputString1);
console.log(reversedString); 

// 8.Title Case: Write a function that takes a sentence as input and returns the sentence in
// title case (the first letter of each word is capitalized).

function toTitleCase(sentence) {
  const words = sentence.split(" ");
  const titleCaseWords = words.map(word => {
    if (word.length === 0) {
      return word; 
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return titleCaseWords.join(" ");
}
const inputSentence = "this is a title case example";
const titleCaseSentence = toTitleCase(inputSentence);
console.log(titleCaseSentence); 


// 9.Anagram Checker: Write a function that checks whether two given strings are
// anagrams of each other (contain the same characters but in a different order).

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
  console.log(`"${string1}" and "${string2}" are not anagrams.`);
}

// 10.Longest Word: Write a function that takes a sentence as input and returns the
// longest word in the sentence. If there are multiple words with the same length, return
// the first one.

function findLongestWord(sentence) {
  const words = sentence.split(" ")
  let longestWord = "";
  let maxLength = 0;
  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "");

    if (cleanedWord.length > maxLength) {
      longestWord = cleanedWord;
      maxLength = cleanedWord.length;
    }
  }

  return longestWord;
}

const inputSentence1 = "The quick brown fox jumps over the lazy dog.";
const longestWord = findLongestWord(inputSentence1);
console.log(`The longest word is: "${longestWord}"`);

