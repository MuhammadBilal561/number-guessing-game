#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 100);
const answers = await inquirer
    .prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess a number between 0 and 100?"
    }
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedNo) {
    console.log("You Guess a right number!");
}
else if (userGuess < 0 || userGuess > 100) {
    console.log("please enter a number between 0 & 100");
}
else {
    console.log("You Guess a wrong number!");
}
console.log("your guess:", userGuess, "&", "Correct answer:", systemGeneratedNo);
