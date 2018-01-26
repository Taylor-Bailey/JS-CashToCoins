// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

const dollarAmount = 13.92

const piggyBank = {
    pennies:.92,
    nickels:1.05,
    dimes:1.20,
    quarters:10.75,
}

let value = {
    pennies:.01,
    nickels:.05,
    dimes:.1,
    quarters:.25,
}

var numberOfPennies = (piggyBank.pennies/value.pennies);
var numberOfNickels = (piggyBank.nickels/value.nickels);
var numberOfDimes = Math.round(piggyBank.dimes/value.dimes);
var numberOfQuarters = (piggyBank.quarters/value.quarters);

let sortedCoins = [numberOfPennies, numberOfNickels, numberOfDimes, numberOfQuarters]

// That should produce the following output.
let numberofCoins = {
    pennies: numberOfPennies,
    nickels: numberOfNickels,
    dimes: numberOfDimes,
    quarters: numberOfQuarters
}

