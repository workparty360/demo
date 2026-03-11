const { Command } = require('commander');
const program = new Command();

program
  .name('greeter')
  .description('A simple CLI to greet users')
  .version('1.0.0');

// Define a simple command
program
  .command('say-hi')
  .description('Display a friendly greeting')
  .argument('<name>', 'The name of the person to greet') // Required argument
  .option('-u, --uppercase', 'Display the greeting in all caps') // Optional flag
  .action((name, options) => {
    let message = `Hello, ${name}!`;
    
    if (options.uppercase) {
      message = message.toUpperCase();
    }
    
    console.log(message);
  });

program.parse(); 