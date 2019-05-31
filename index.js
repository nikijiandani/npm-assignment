var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message1 = `This is supposed to be a ${chalk.blue(`cool`)} message`;
console.log(message1);

var message2 = `This string uses chained methods`;
console.log(chalk.red.bgBlue(message2));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));