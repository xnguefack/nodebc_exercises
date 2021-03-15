/* Create a new index33.js file
Define the userCount variable and assign the following value: 100
Increment the user count by 5
Show the following output: Users count: %userCount%
Decrement the user count by 3
Show the following output: Users count: %userCount%
We bought a new company so now we double the user count
Show the following output: Users count: %userCount%
We know that 50% of the users identify as men and the other 50% identify as women
Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
Use as many assignment operators as you can*/

let userCount = 100;
userCount += 5;
console.log("Users count: ", userCount);
userCount -= 3;
console.log("Users count: ", userCount);
console.log(`Users count: ${userCount * 2}`);
let [menPercent, womenPercent] = [50, 50]; // INSTEAD OF THIS CODE: let menPercent=50; let womenPercent=50;
console.log(`Users count: ${userCount * 2}, ${(userCount * 2)*menPercent/100} men & ${(userCount * 2)*womenPercent/100} women.`);