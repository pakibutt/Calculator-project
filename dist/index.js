// Calculator project 
import * as inquirer from "inquirer";
import chalk from "chalk";
//calculator operatos
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: 'input',
            name: 'n1',
            message: 'Enter the first number',
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: 'operator',
            message: 'select an operator :',
            choices: Object.values(Operator)
        },
        {
            type: 'input',
            name: 'n2',
            message: 'Enter the second number',
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.Add) {
        result = num1 + num2;
        console.log(chalk.blue.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Subtract) {
        result = num1 - num2;
        console.log(chalk.redBright.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Multiply) {
        result = num1 * num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Divide) {
        result = num1 / num2;
        console.log(chalk.yellowBright.bgBlackBright(`Result is : ${result}`));
    }
}
main();
