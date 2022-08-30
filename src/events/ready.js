const { log } = require('../helpers/log');
const chalk = require('chalk');
const { ActivityType } = require('discord-api-types/v10');

module.exports = async (client) => {
  await client.guilds.fetch();

  log('info', `Logged in as ${chalk.bold(client.user.tag)}`);

  const statuses = [
    [`le goat`, ActivityType.Watching],
  ];
  
  let i = 0;
  setInterval(async () => {
    await client.user.setActivity(statuses[i][0], {
      type: statuses[i][1],
    });
    i = ++i % statuses.length;
  }, 8e3);
};