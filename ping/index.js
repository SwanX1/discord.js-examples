'use strict';
const { token, prefix } = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });

client.login(token);

client.on('ready', () => console.log(`Bot logged in as ${client.user.tag}!`));
client.on('message', message => {
  if (message.author.bot || !msg.guild) return;
  if (message.content === prefix + "ping") {
    message.channel.send(
      new MessageEmbed()
      .setTitle('Pong!')
      .setDescription(`Bot ping is ${client.ws.ping}`)
      .setColor(
        (() => {
          if (client.ws.ping > 500) {
            return '#E74C3C';
          } else {
            return '#2ECC71';
          }
        })()
      )
    );
  }
});