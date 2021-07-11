const Discord = require('discord.js');

async function join(message) {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
        connection = await message.member.voice.channel.join();
        message.tts = true;
        message.reply('Cheguei!!')
    } else {
        message.reply('você precisa entrar no chat primeiro!');
    }
}

module.exports = {
    name: `join`,
    description: `join bot into the channel`,
    execute: join
};