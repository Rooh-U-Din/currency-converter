#! /usr/bin/env node
3
import inquirer from "inquirer"

const currency:any ={
    USD:1, //Base value
    PKR:280,
    IND:83.23,
    EUR:0.9,
    GBP:0.76,
    DIN:40
}

let answer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter from currency",
            type:"list",
            choices:["USD","PKR","IND","EUR","GBP","DIN"]
          },
          {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:["USD","PKR","IND","EUR","GBP","DIN"]
          },
          {
            name:"amount",
            message:"Enter your amount",
            type:"number"
          }
    ]
)


let fromAnswer = currency[answer.from];
let toAnswer = currency[answer.to];
let amountAnswer = answer.amount;
let baseAmount = amountAnswer / fromAnswer;
let convertAmount = baseAmount * toAnswer;
console.log(convertAmount);