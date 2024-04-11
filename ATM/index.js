import inquirer from "inquirer";
let mybalance = 100000;
let myPinCode = 11111;
const getPin = await inquirer.prompt([{ name: "pinAns", type: "number", message: "Enter pin number" }]);
if (getPin.pinAns === myPinCode) {
    console.log("correct pin code");
    let getOption = await inquirer.prompt([{ name: "optionAns", message: "please select option",
            type: "list", choices: ["cashWithdrawal", "Check Balance", "fast cash"] }]);
    if (getOption.optionAns === "cashWithdrawal") {
        let amountAns = await inquirer.prompt([{ name: "amount", message: "Enter the amount", type: "number", }]);
        if (mybalance <= amountAns.amount) {
            console.log("unsufficient amount");
        }
        else {
            mybalance -= amountAns.amount;
            console.log("your remaining balance is", +mybalance);
            console.log(`your remaining balance is ${mybalance}`);
        }
    }
    else if (getOption.optionAns === "Check Balance") {
        console.log(mybalance);
    }
    else if (getOption.optionAns === "fast cash") {
        let cashAns = await inquirer.prompt([{ name: "cash", message: "select cash option", type: "list", choices: ["1000", "2000", "5000", "10000", "50000"] }]);
        console.log(mybalance -= cashAns.cash);
    }
}
else {
    console.log("incorrect pin code");
}
