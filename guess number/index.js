import inquirer from "inquirer";
const hideNumber = Math.floor(Math.random() * 10 + 1);
const number = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please enter your guess number"
    }
]);
if (number.userGuessNumber === hideNumber) {
    console.log("Congratulations, you guess the correct number");
}
else {
    console.log("you guessed wrong number");
}
