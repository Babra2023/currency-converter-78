#! /usr/bin/env node

import inquirer from "inquirer"

//List of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, // Base currency
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR":280,
}

let user_answer = await inquirer.prompt([
    {
        name: "from currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    },
])

// currency conversion by formula

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log("Converted Amount = ${converted_amount}");


