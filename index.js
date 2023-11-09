const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('Sever Operating...')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/resources/html/main.html')
});

app.get('/instagram', function(req, res) {
    res.sendFile(__dirname + '/resources/html/instagram.html')
});

app.get('/youtube', function(req, res) {
    res.sendFile(__dirname + '/resources/html/youtube.html')
});

app.get('/other', function(req, res) {
    res.sendFile(__dirname + '/resources/html/other.html')
});

app.get('/youtube/download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    });