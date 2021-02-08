//Define the variable series name (camel case) and assign the string value: Game of Thrones
let SeriesName = "Game of Thrones"
    //Define the following variables and assign the corresponding values
let dragon1 = "Drogon"
let dragon2 = "Rhaegal"
let dragon3 = "Viserion"
    //Create a template variable with the following value: In %seriesName% the dragons name are: %dragon1%, %dragon2% & %dragon3%
let TemplateLiteral = `In ${SeriesName} the dragons name are: ${dragon1}, ${dragon2} & ${dragon3}`
    //Use console.log to output the interpolated template value
console.log(TemplateLiteral)
    //The final result must be: In Game of Thrones the dragons name are: Drogon, Rhaegal & Viserion