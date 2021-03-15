/*Create a new index57.js file
Copy and paste the code from exercise 54
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator*/
let username = "pepe2017";
let password = "12345"; {
    let userCheck = (username === "pepe2017" && password === "12345") ? `Logged in ${username}, show ${username} home page` : `Sorry, there has been a problem with your username or password`;
    console.log(userCheck);
}; {
    let userCheck = (username === "pepe201" && password === "12345") ? `Logged in ${username}, show ${username} home page` : `Sorry, there has been a problem with your username or password`;
    console.log(userCheck);
}


/*let username = "pepe201"; // modify for the ELSE
let password = "12345";
// If the user name equals pepe2017 AND password equals 12345 then show the following message as output: Logged in user, show user home page
if (username === "pepe2017" && password === "12345") {
    console.log(`Logged in ${username}, show ${username} home page`);
} else {
    console.log(`Sorry, there has been a problem`)
};*/