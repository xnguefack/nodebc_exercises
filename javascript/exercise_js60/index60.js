// Create a new index60.js file
// Define a grade variable and assign a value bettwen 0 and 10
let grade = 6.23;
/* If the grade is bigger or equal to 9 then show the following message: Great work!!
If the grade is lower than 9 and bigger or equal to 6 then show the following message: You've done it!
Else show the following message: You need to do all the exercises again, please try again!
Change the grade value to test all cases*/
if (grade > 9 || grade == 9) {
    console.log("Great work!!")
} else if (grade < 9 && grade > 6 || grade == 6) {
    console.log("You've done it!")
} else {
    console.log("You need to do all the exercises again, please try again!")
};