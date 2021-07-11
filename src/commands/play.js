const ytdl = require('ytdl-core-discord');

async function play(connection, url) {
    connection.play(await ytdl(url), { type: 'opus' });
}

module.exports = {
    name: 'player',
    description : 'play any song from yt',
    execute: play
}