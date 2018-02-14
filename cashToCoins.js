console.log("test");

// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.
const totalDollar = 12.17;
let makingCents = totalDollar * 100;
const piggyBank = {};

// console.log(makingCents);

//magic code //
let afterQuarters = (makingCents % 25)

piggyBank.quarters = Math.floor(makingCents / 25);
piggyBank.dimes = Math.floor((afterQuarters) / 10);
piggyBank.nickels = Math.floor(((afterQuarters) % 10) / 5);
piggyBank.pennies = Math.round(((afterQuarters) % 10) % 5);
console.log(piggyBank);
document.getElementById("coins").innerHTML = "Quarters: " + piggyBank.quarters + "<br>"
    + "Dimes: " + piggyBank.dimes + "<br>" + "Nickels: " + piggyBank.nickels + "<br>" + "Pennies: " + piggyBank.pennies;