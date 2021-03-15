// Create a new index58.js file
// Define a hour variable
// Assign the hour variable a value between 1 and 24
let Hour = 20;
let User = 'Hermann';
/*If hour is bettwen 5 to 12 show the following message: Good morning
If hour is bettwen 12 to 18 show the following message: Good afternoon
If hour is bettwen 18 to 22 show the following message: Good evening
If hour is bettwen 22 to 5 show the following message: Good night
Change the hour value to test each case*/
if (5 < Hour && Hour < 12) {
    console.log(`Good morning ${User}.`)
} else if (12 < Hour && Hour < 18) {
    console.log(`Good afternoon ${User}.`)
} else if (18 < Hour && Hour < 22) {
    console.log(`Good evening ${User}.`)
} else { //(22 < Hour | Hour < 5) {_____NO NEED FOR THIS SECTION
    console.log(`Good night ${User}.`)
};