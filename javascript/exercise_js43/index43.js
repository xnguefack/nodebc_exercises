// Create a new index43.js file
// Define a text variable with the following value: game of thrones
let Text = "game of thrones";
console.log("the length of Text is: ", Text.length); // the space count for the length and indexes
/* Define 3 variables with the following names:
firstChar
secondChar
thirdChar*/
let firstChar;
let secondChar;
let thirdChar;
/*Assign the firstChar the first char from the text variable
Assign the secondChar the char at index 5 from the text variable
Assign the thirdChar the char at index 8 from the text variable*/
firstChar = Text.charAt(0);
secondChar = Text.charAt(5);
thirdChar = Text.charAt(8);
// Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar
let acronym = firstChar.concat(secondChar, thirdChar);;
console.log(acronym);
// Transform the result variable to uppercase
let acronymUppercase = acronym.toUpperCase();
console.log(acronymUppercase);
// Show the result value as output: the final result is: GOT
console.log('The final result is: ', acronymUppercase);
// What happens when you use an invalid index number (for example, 1000)? Try it!