// declare the variable, use "const" instead of "let"

const FirstName = 'Hervé';
FirstName = 'Pablo' // try to change the constante value with another one
const LastName = 'Nguefack';
let Age = '37';
const DateOfBirth = '06/09/1984';
let Address;
Address = 'Maple Ridge, BC';
// print or display the result in node npl mode
console.log("Fisrt Name:", FirstName);
console.log("Last Name:", LastName);
console.log("Age:", Age);
console.log("Date of birth:", DateOfBirth);
console.log("Address:", Address);

// the error obtained when running the script:
//
// xngue@Zbook-X2-N3H MINGW64 /d/nodebc/exercises/javascript/exercise_js04
// $ node /d:/nodebc/exercises/javascript/exercise_js09/index9.js
// d:\nodebc\exercises\javascript\exercise_js09\index9.js:4
// FirstName = 'Pablo'
//           ^
//
// TypeError: Assignment to constant variable.
//    at Object.<anonymous> (d:\nodebc\exercises\javascript\exercise_js09\index9.js:4:11)...*non exhaustif*