const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('Sever Operating...')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/resources/html/main.html')
});