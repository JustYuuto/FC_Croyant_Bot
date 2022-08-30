const { SlashCommandBuilder } = require('discord.js');
const { sendMessage } = require('../helpers/message');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quoi')
    .setDescription('euh')
  ,

  async run(interaction, client, args, isMessage) {
    return sendMessage('Feur', interaction);
  }
}