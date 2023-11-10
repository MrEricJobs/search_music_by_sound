const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegLocation = require('@ffmpeg-installer/ffmpeg').path;
const app = express();

function create_temp_dir() {
    let count = 0;
    while(true){
        if(fs.existsSync(__dirname + '/temp/res' + count)){
            count++;
        }
        else{
            fs.mkdirSync(__dirname + '/temp/res' + count);
            return __dirname + '/temp/res' + count;
        }
    }
}

app.use(express.static(__dirname + '/static'));

app.listen(8080, function() {
    console.log('Sever Operating...')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/main.html')
});

app.get('/youtube', function(req, res) {
    res.sendFile(__dirname + '/static/youtube.html')
});

app.get('/youtube/youtube_downloader', function(req, res) {
    res.sendFile(__dirname + '/static/youtube_downloader.html')
});

app.get('/youtube/youtube_search_music', function(req, res) {
    res.sendFile(__dirname + '/static/youtube_search_music.html')
});

app.get('/youtube/youtube_downloader/download', (req, res) => {
    var URL = req.query.URL;
    var format = req.query.format;
    if (format == '.mp4') {
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(URL, {quality: 'lowestvideo'}).pipe(res);
    }
    else if (format == '.mp3') {
        res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        var proc = new ffmpeg({source: ytdl(URL)});
        proc.setFfmpegPath(ffmpegLocation);
        proc.withAudioCodec('libmp3lame')
            .toFormat('mp3')
            .output(res)
            .run();
    }
    else{
        console.log('ERROR! NOT RIGHT FORMAT >> ', format);
    }
    });