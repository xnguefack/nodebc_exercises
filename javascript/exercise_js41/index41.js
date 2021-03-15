// Create a new index41.js file
// Define a text1 variable and assign the following value: HELLO
// Define a text2 variable and assign the following value: javascript
// Define a text3 variable and assign the following value: WORLD
const text1 = 'HELLO ';
const text1Lowercase = text1.toLowerCase();
console.log(text1.toLowerCase()); // console.log(text1Lowercase);
const text2 = 'javascript ';
const text2Uppercase = text2.toUpperCase();
console.log(text2.toUpperCase()); // console.log(text2Uppercase);
const text3 = 'WORLD.';
const text3Lowercase = text3.toLowerCase();
console.log(text3.toLowerCase()); // or console.log(text3Lowercase);
//Show the following output: hello JAVASCRIPT world
//Use console.log() & concat
console.log(text1Lowercase.concat(text2Uppercase, text3Lowercase));