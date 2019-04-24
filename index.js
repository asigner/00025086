var path = require('path');
var uuidv4 = require('uuid/v4');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/documents/*', function(req, res) {
    res.redirect('/filestore/blobs/'+ uuidv4() + '.pdf');
});

app.get('/filestore/blobs/*.pdf', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'sample.pdf'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Document server started on http://localhost:3000/');
});