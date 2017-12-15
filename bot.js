const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const msgContent = message.content.split(prefix).slice(1)[0];
    let msg = false;
    switch(msgContent) {
        case 'ping':
            msg = 'pong';
        break;
        case 'avatar':
            msg = message.author.avatarURL;
        break;
    }

    if(msg) {
        message.reply(msg);
    }  
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.BOT_TOKEN);
