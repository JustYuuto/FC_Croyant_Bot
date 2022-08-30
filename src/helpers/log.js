const chalk = require('chalk');

/**
 * Logs a message with a custom style depending on the message type
 * @param {'success' | 'info' | 'warning' | 'error'} type The message type
 * @param {string} message
 */
module.exports.log = (type, message) => {
  let color, emoji;
  switch (type) {
    case 'success':
      color = 'green';    emoji = '✅ ';
      break;
    case 'info':
      color = 'blue';     emoji = 'ℹ️';
      break;
    case 'warning':
      color = 'yellow';   emoji = '⚠️';
      break;
    case 'error':
      color = 'red';      emoji = '❌ ';
      break;
    default:
      throw new Error(`Type "${type}" doesn't exist!`);
  }

  console.log(chalk[color].bold(`[${emoji}]`) + ' ' + message);
}