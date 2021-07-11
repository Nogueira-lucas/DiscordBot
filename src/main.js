/*
*   PROJECT: AmandaBot
*   AUTHOR: Lucas Nogueira
*   DATE: 08-07-2021
*/
const Discord = require('discord.js');

const exitModule = require('./commands/quit')
const playerModule = require('./commands/play')
const entranceModule = require('./commands/enter')

const googleTTS = require('google-tts-api')

const client = new Discord.Client();

//put your token here
const TOKEN = ''; 
const SONG = 'https://www.youtube.com/watch?v=SYN9jKcgJYo&list=PLD5la5oTsjqiwkoF3zGJ6d3ZIYzgNmHDr&index=1';

let connection = {};

const PLAY = '/play';
const JOIN = '/join';
const QUIT = '/sai-bot'
const PREFIX = '/'
const BOT_NAME = 'AMANDA' 

console.log(`${BOT_NAME} its running...`)
client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it

    if(message.content.startsWith(PREFIX)) { 
      let args = message.content.split(" ")
      let first_arg = args[0];
      console.log("argumentos:", args)

      if (!message.guild) return;
  
      switch (first_arg) {
        case QUIT:
          connection = exitModule.execute(connection, message)
          break;
        case JOIN:
          entranceModule.execute(message)
          break;
        case PLAY: 
          playerModule.execute(connection, args[1])
          break;
      }
    }   
});

//AMANDA SHOULD BE ENTER WITH IT
client.login(TOKEN);