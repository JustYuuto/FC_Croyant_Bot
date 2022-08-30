/**
 * Creates a codeblock
 * @param {string} language
 * @param {...any} lines
 * @returns {string} Codeblock
 */
module.exports.codeBlockWithLanguage = (language, ...lines) => {
  return '```' + language + '\n' + lines.join('\n') + '\n```';
}

/**
 * Creates a codeblock
 * @param {...any} lines
 * @returns {string} Codeblock
 */
module.exports.codeBlock = (...lines) => {
  return '```\n' + lines.join('\n') + '\n```';
}

/**
 * Creates a &quot;==========&quot; line with a custom length
 * @param {number} length
 * @param {string} [character]
 * @returns {string} The line
 */
module.exports.line = (length, character = '=') => {
  let line = '';

  for (let i = 0; i < length; i++) {
    line += character;
  }
  return line;
}

/**
 * Send a message or reply to the interaction
 * @param {string} message
 * @param interaction
 * @param {boolean} ephemeral Is the message ephemeral or not
 * @returns {any}
 */
module.exports.sendMessage = (message, interaction, ephemeral = false) => {
  const isMessage = typeof interaction.commandName === 'undefined';
  return isMessage ?
    interaction.reply(message)
      .then(m => ephemeral && setTimeout(() => m.delete(), 10000) || undefined) :
    interaction.reply({ content: message, ephemeral });
}