const { Client, GatewayIntentBits: Intents } = require('discord.js');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { log } = require('./helpers/log');
const { async } = require('./helpers/functions');
const AnswerConfig = require('./config/AnswerConfig');
require('dotenv').config();

const client = new Client({
  intents: [
    Intents.Guilds, Intents.GuildMessages, Intents.GuildMessageReactions,
    Intents.GuildVoiceStates, Intents.GuildMembers, Intents.MessageContent,
    Intents.GuildPresences
  ]
});

fs.readdir(`${__dirname}/events`, (err, events) => {
  if (err) throw err;

  events.map(event => {
    if (!event.endsWith('.js')) return;
    const eventName = event.replace('.js', '');
    const eventFunc = require(`${__dirname}/events/${event}`);
    client.on(eventName, async (...args) => eventFunc(...args, client));
  });
});

const commands = [];
const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`${__dirname}/commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

async(async () => {
  await AnswerConfig.loadWords();
  try {
    log('info', 'Started refreshing application slash commands...');

    await rest.put(Routes.applicationGuildCommands('1014149192547041302', '1013799799667036223'), { body: commands });

    log('success', 'Successfully reloaded application slash commands!');
  } catch (err) {
    log('error', err);
  }
});

client.login(process.env.TOKEN);