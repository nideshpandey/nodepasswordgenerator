#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./createPassword')
const savePassword = require('./savePassword')


program.version('1.0.0').description('Password generator')


program
.option('-l, --length <number>', 'length of password', 8)
.option('-s, --save', 'save the password to generated.txt')
.option('-nn, --no-numbers', 'do not include numbers')
.option('-ns, --no-symbols', 'do not include symbols')
.parse()

const { length, save, numbers, symbols } = program.opts()


//Function to generate the password
const generatedPassword = createPassword(length, numbers, symbols)

//Copy to clipboard
clipboardy.writeSync(generatedPassword)

//Output of the generated password
console.log(chalk.blueBright('Generated Password: ') + chalk.bold(generatedPassword))
console.log(chalk.green('Password copied to clipboard !'))

//Save Password
if(save){
    savePassword(generatedPassword)
}
