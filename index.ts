#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter firstNumber",
    type: "number", 
    name: "firstNumber" },
    {message: "Enter secondNumber",
     type: "number", 
     name: "secondNumber"},
    {message: "select one of the operators to perform action", 
    type: "list",
    name: "operator", 
    choices: ["Addition", "Subtruction", "Multiplication", "Division"],},

]);


//conditional statement
if (answer.operator === "Addition") {
console.log(answer.firstNumber + answer.secondNumber);

} else if (answer.operator === "Subtruction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if ( answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator")
}


