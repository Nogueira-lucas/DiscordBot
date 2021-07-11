const Discord = require('discord.js');

async function sair(connection, message) {
    if(message.member.voice.channel) {
        connection = await message.member.voice.channel.leave();
        message.reply('ok, tchau...');
    } else {
        message.reply('eu nem entrei, já quer me expulsar??')
    }
    return connection
}

module.exports = {
    name: 'quit',
    description: 'quits the channel',
    execute: sair
}