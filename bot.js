const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.on('message', message => {
  if (message.content === 'avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.BOT_TOKEN);
