// Create a new index15.js file
// Define a best student name variable (camel case)
let BestStudentName = "John Doe"
    // Assign the variable the class best student name (string)
let intro = "The best student name is:"
    // Use console.log to show the following message: The best class student is: %bestStudentName%
console.log("1.", intro + " " + BestStudentName)
    // Use Template literals and interpolate the bestStudentName variable value
let sentence = `The best student name is: ${BestStudentName}.`
console.log("2.", sentence)
    // Refactor the code to use string concatenation instead of template
let space = " " // same as just adding +" "+ in console.log()

console.log("3.", intro + space + BestStudentName)