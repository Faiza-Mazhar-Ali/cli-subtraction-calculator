#! /usr/bin/env node

//inquirer for QNA 
import inquirer from "inquirer";

//prompt for first number
let question1 = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "please enter your first number:",
  },
]);

//prompt for second number
let question2 = await inquirer.prompt([
  {
    name: "num2",
    type: "number",
    message: "please enter your second number",
  },
]);

//Print output
let output: number = question1.num1 - question2.num2;
console.log(output);
