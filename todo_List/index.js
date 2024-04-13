#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    const todoQuestion = await inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What would you like to add in your list?",
        },
        {
            name: "items",
            type: "confirm",
            message: "would you like to more add in your list?",
            default: true
        }
    ]);
    todoList.push(todoQuestion.item);
    console.log(todoList);
    condition = todoQuestion.items;
}
