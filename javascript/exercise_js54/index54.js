/*Create a new index54.js file
Copy and paste the code from exercise 51
Refactor the code so it match the new requirements:
If the username or password don't match show the following message: Sorry, there has been a problem, please try it again.*/
let username = "pepe201"; // modify for the ELSE
let password = "12345";
// If the user name equals pepe2017 AND password equals 12345 then show the following message as output: Logged in user, show user home page
if (username === "pepe2017" && password === "12345") {
    console.log(`Logged in ${username}, show ${username} home page`);
} else {
    console.log(`Sorry, there has been a problem`)
};