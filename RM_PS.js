
// 01. Solve Me First
// Question: Write a function that returns the sum of two integers.

var solveMeFirst = function(a, b) {
  return a + b;
};


// 02. Multiply
// Question: Write a function that returns the product of two numbers.

var multiply = function(a, b) {
  return a * b;
};


// 03. Even or Odd
// Question: Return "Even" when a number is even and "Odd" when it is odd.

var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};


// 04. Return Negative
// Question: Return the negative value of a number. If it is already negative, keep it negative.

var makeNegative = function(number) {
  return number > 0 ? -number : number;
};


// 05. Opposite Number
// Question: Return the opposite of a given number.


var opposite = function(number) {
  return -number;
};


// 06. Simple Array Sum
// Question: Return the sum of all integers in an array.

var simpleArraySum = function(ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};


// 07. sleepIn
// Question: Return true if it is not a weekday or you are on vacation.

var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};


// 08. monkeyTrouble
// Question: Two monkeys are in trouble if both are smiling or neither is smiling.

var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};


// 09. sumDouble
// Question: Return the sum of two integers, but return double the sum when they are equal.

var sumDouble = function(a, b) {
  return a === b ? (a + b) * 2 : a + b;
};


// 10. diff21
// Question: Return the absolute difference between n and 21, doubling it when n is greater than 21.

var diff21 = function(n) {
  return n > 21 ? 2 * (n - 21) : 21 - n;
};


// 11. parrotTrouble
// Question: Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.

var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};


// 12. makes10
// Question: Return true if either number is 10 or their sum is 10.

var makes10 = function(a, b) {
  return a === 10 || b === 10 || a + b === 10;
};


// 13. nearHundred
// Question: Return true if n is within 10 of 100 or within 10 of 200.

var nearHundred = function(n) {
  return Math.abs(n - 100) <= 10 ||
         Math.abs(n - 200) <= 10;
};


// 14. posNeg
// Question: Return true when one number is positive and the other is negative.
// If negative is true, both numbers must be negative.

var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};


// 15. notString
// Question: Add "not " to the beginning of a string unless it already starts with "not".

var notString = function(str) {
  return str.startsWith("not") ? str : "not " + str;
};


// 16. Compare the Triplets
// Question: Compare two three-element score arrays and return how many points each person earns.

var compareTriplets = function(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
};


// 17. A Very Big Sum
// Question: Return the sum of all values in an integer array.

var aVeryBigSum = function(ar) {
  return ar.reduce((sum, number) => sum + number, 0);
};


// 18. Staircase
// Question: Create a right-aligned staircase of height n using # characters.

var staircase = function(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};


// 19. Grading Students
// Question: Round a grade up to the next multiple of 5 when it is close enough;

var gradingStudents = function(grades) {
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }

    let nextMultiple = Math.ceil(grade / 5) * 5;

    return nextMultiple - grade < 3
      ? nextMultiple
      : grade;
  });
};


// 20. Time Conversion
// Question: Convert a 12-hour AM/PM time string into 24-hour format.

var timeConversion = function(s) {
  let period = s.slice(-2);
  let time = s.slice(0, -2);
  let [hour, minute, second] = time.split(":");

  if (period === "AM") {
    hour = hour === "12" ? "00" : hour;
  } else {
    hour = hour === "12"
      ? "12"
      : String(Number(hour) + 12);
  }

  return `${hour}:${minute}:${second}`;
};
