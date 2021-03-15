// Create a new index42.js file
/* Define the message and assign the following value:
Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.*/

let message1 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";

/*Show the following output:
message text all in uppercase
message text all in lowercase*/

console.log(message1.toUpperCase());
let message1U = message1.toUpperCase();
console.log('\n');

console.log(message1.toLowerCase());
let message1L = message1.toLowerCase();
console.log('\n');

/*Transform the following text to uppercase:
Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune.*/

let message2 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune.";
console.log(message2.toLowerCase());
let message2U = message2.toUpperCase();
console.log('\n');

/*Transform the following text to lowercase:
Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.*/

let message3 = "Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
console.log(message3.toLowerCase());
let message3L = message3.toLowerCase();
console.log('\n');

/* Add\ n special character to create new lines after each paragraph
for both texts
Combine both texts into one variable(upper and lower
    case)
Show the final result using concat*/
// console.log(message2U.concat('\n', message3L));  -> this console.log will be executed on last line

// Show the result character length with a descriptive message: The message has % chars % characters long */
let finalMessage = message2U.concat('\n', message3L);
console.log(finalMessage, '\n', `The message has ${finalMessage.length} characters long.`);