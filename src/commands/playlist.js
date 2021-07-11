const playSong = require('./commands/play');

let playlist = [];

function showQueue() {
    
}

function add(url) {
    //add url on playlist
}

function skip() {
    //skip song
}

function clearQueue() {
    playlist = [];
}

async function runPlaylist() {
    do {
        let url = playlist.pop();
        playSong(url)
    }
    while(playlist);
}