const { SlashCommandBuilder } = require('discord.js');
const { sendMessage } = require('../helpers/message');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Pose une question et le bot te répondras...')
    .addStringOption(option => option
      .setName('question')
      .setDescription('La question que tu veux poser au bot')
      .setRequired(true)
    )
  ,

  async run(interaction, client, args, isMessage) {
    const question = isMessage ? args[0] : interaction.options.getString('question');
    if (!question) return sendMessage('Et la question ??', interaction);
    const answers = [
      "Oui", "Non", "Peut-être", "Demande-moi à nouveau.", "Jamais !", "Bah, évidemment !",
      "Bien sûr !", "Fais pas chier", "T'es con ?", "Imagine :flushed:", "Bonsoir, non",
      "Ratio", "Gênant"
    ];

    const message = `🎱 **${answers[Math.floor(Math.random() * answers.length)]}**`;
    return sendMessage(message, interaction);
  }
}