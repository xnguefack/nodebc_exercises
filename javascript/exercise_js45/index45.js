// Create a new index45.js file
// Define a playerName variable with the following value: Patrik Laine is lame
const playerName = "Patrick Laine is lame";
// Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets , Pittsburgh Penguins";
// Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
let message = "Winnipeg is the best Canadian city, Go Winnipeg";
/* Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go*/
let playerSlice = playerName.slice(0, 16);
//console.log(playerSlice);
let playerSliceUpper = playerSlice.substr(0, 13).toUpperCase() + playerSlice.slice(13); // First letter in Capital letter !!!!
console.log(playerSliceUpper);
let teamSliceJets = teams.slice(46, 50);
//console.log(teamSliceJets);
let teamSliceJetsCapital = teamSliceJets.charAt(0).toUpperCase() + teamSliceJets.slice(1); // First letter in Capital letter !!!!
//console.log(teamSliceJetsCapital);
let messageSlice1 = message.slice(11, 21);
//console.log(messageSlice1);
let messageSlice2 = message.slice(34, 39);
//console.log(messageSlice2);
let slicedMessage = playerSliceUpper.concat(messageSlice1, teamSliceJets, messageSlice2, teamSliceJets); // just checking
//console.log(slicedMessage); // just checking
/* Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!*/
console.log(`${playerSliceUpper}${messageSlice1}${teamSliceJetsCapital}${messageSlice2}${teamSliceJetsCapital}!!`);

// LINE 16 WITH SUBSTR WAS EXACTELY WHAT I WANTED