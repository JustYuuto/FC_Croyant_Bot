const { SlashCommandBuilder, escapeMarkdown } = require('discord.js');
const { sendMessage } = require('../helpers/message');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('note')
    .setDescription('Noter un truc sur 10')
    .addStringOption(option => option
      .setName('chose')
      .setDescription('La chose à noter')
      .setRequired(true)
    )
  ,

  async run(interaction, client, args, isMessage) {
    const chose = isMessage ? args.join(' ') : interaction.options.getString('chose');
    if (!chose) return sendMessage('Tu as oublié le truc que je dois noter', interaction);

    if (interaction.member.user.id === '851577014757752862') {
      const message = `Je note **${escapeMarkdown(chose)}** 10/10 car je veux pas me refaire ban par Yuko`;
      return sendMessage(message, interaction);
    }

    const message = `Je note **${escapeMarkdown(chose)}** ${Math.floor(Math.random() * 11)}/10`;
    return sendMessage(message, interaction);
  }
}