// Create a new index34.js file
//Define the following variables: income, revenue and taxes
let income;
let revenue;
let taxes;
//Assign the following values:
income = 1000;
revenue = 600;
taxes = 500;
console.log(`income: ${income}, revenue: ${revenue} and taxes: ${taxes}.`);
//This months objectives are:
//Income of at least 800 or more
console.log(`Income Objective: At least 800 -> ${income>=800}`);
//Spend less than 400 on taxes
console.log(`Taxes Objective: Spend less than 400 -> ${taxes<400}`);
//We pay bonus if our revenue is 600
console.log(`Bonus Objective: Bonus paid is revenue is 600 -> ${revenue===600}`);

/* Show the following output (console.log()):
Income Objective: true or false (use greater than or equal operator)
Taxes Objective: true or false (use less than operator)
Bonus Objective: true or false (use equality operator) */