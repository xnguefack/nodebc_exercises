// Create a new index44.js file
// Define a text variable and assign the following value: HELLO
let TEXT = 'HELLO';
let TEXTlength = TEXT.length;
// Define a result variable
let TEXTrevert;
let revert1 = TEXT.charAt(TEXTlength - 1); // text length is 5 but letters indexes are from 0 ~ 4,, so to reverse the text we start from index 4
let revert2 = TEXT.charAt(TEXTlength - 2);
let revert3 = TEXT.charAt(TEXTlength - 3);
let revert4 = TEXT.charAt(TEXTlength - 4);
let revert5 = TEXT.charAt(TEXTlength - 5);
// Get each char from the text variable and revert the text assigning it to the result variable
// At the end you should be able to show the following text: OLLEH
TEXTrevert = revert1.concat(revert2, revert3, revert4, revert5);
// Once you reverted the text, transform it to lowercase
TEXTrevertLower = TEXTrevert.toLowerCase();
// Show the final output: the final result is: olleh
console.log(`The final result is: ${TEXTrevertLower}.`)
    // It kind of sound spanish, right ? ..ole!!!(lol)