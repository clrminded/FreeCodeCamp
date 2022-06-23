// Checking is a pattern exists in a string or not
// -----------------------------------------------
/**
 * To start understanding regular expressesions we
 * need to understand why we use, them, when to 
 * use them, and where is the best place to use them.
 * 
 * The test() is the first method we will look at:
 * paramaters will include a string on text that we
 * are searching.
 * Required, a regex code that describes the
 * expression that we are looking for.
 * Return will be true if the expression is found,
 * and false if otherwise.
 */

let testString1 = "freeCodeCamp";
let testRegex1 = /Code/;
let testResult1 = testRegex1.test(testString1);
console.log(testResult1);
console.log("Code was found");
console.log();

/**
 * Flags are another concept that we want to know 
 * about, the first flag we will look at is the 
 * i flag: 
 * This flag will ignore the case sensitivity of 
 * what we are searching for.
 */
 let testString2 = "freeCodeCamp";
 let testRegex2 = /freecodecamp/i;
 let testResult2 = testRegex2.test(testString2);
 console.log(testResult2);
 console.log("freecodecamp was found ignoring case");
 console.log();

// Extracting out our matches
// -------------------------------------------------
/**
 * So this is a new section, lets say that we want to
 * set a variable to the value of a specific word in
 * a sentence. We can use the match() method.
 * parameters: a regex expression
 * return: an array! This is a wonderful feature!
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let codingResult = extractStr.match(codingRegex);
console.log(codingResult);
console.log("Here we get an array will all the matches of the word \"coding\"");
// Note that this is sorta the opposite of the 
// test() method....
